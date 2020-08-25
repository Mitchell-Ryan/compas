import { deepStrictEqual } from "assert";
import { isNil } from "@lbu/stdlib";
import { state, testLogger, timeout } from "./state.js";

/**
 * @param {TestState} testState
 * @returns {Promise<void>}
 */
export async function runTestsRecursively(testState) {
  if (!isNil(testState.callback)) {
    if (testState.parent === state) {
      testLogger.info(`Running: ${testState.name}`);
    }

    try {
      const result = testState.callback(createRunnerForState(testState));

      if (typeof result?.then === "function") {
        // Does a race so tests don't run for too long
        await Promise.race([
          result,
          new Promise((_, reject) => {
            setTimeout(
              () =>
                reject(
                  new Error(
                    `Exceeded test timeout of ${timeout / 1000} seconds.`,
                  ),
                ),
              timeout,
            );
          }),
        ]);
      }
    } catch (e) {
      testState.caughtException = e;
    }
  }

  for (const child of testState.children) {
    await runTestsRecursively(child);
  }
}

/**
 * @function
 * @param {string} name
 * @param {TestCallback} callback
 * @returns {void}
 */
export const test = subTest.bind(undefined, state);

function createRunnerForState(testState) {
  return {
    log: testLogger,
    ok: ok.bind(undefined, testState),
    notOk: notOk.bind(undefined, testState),
    equal: equal.bind(undefined, testState),
    notEqual: notEqual.bind(undefined, testState),
    deepEqual: deepEqual.bind(undefined, testState),
    fail: fail.bind(undefined, testState),
    pass: pass.bind(undefined, testState),
    test: subTest.bind(undefined, testState),
  };
}

/**
 * @param {TestState} state
 * @param {*} value
 * @param {string} [message]
 */
function ok(state, value, message) {
  const passed = !!value;

  state.assertions.push({
    type: "ok",
    passed,
    meta: {
      actual: passed,
    },
    message,
  });
}
/**
 * @param {TestState} state
 * @param {*} value
 * @param {string} [message]
 */
function notOk(state, value, message) {
  const passed = !value;

  state.assertions.push({
    type: "notOk",
    passed,
    meta: {
      actual: passed,
    },
    message,
  });
}

/**
 * @param {TestState} state
 * @param {*} actual
 * @param {*} expected
 * @param {string} [message]
 */
function equal(state, actual, expected, message) {
  const passed = actual === expected;

  state.assertions.push({
    type: "equal",
    passed,
    meta: {
      actual,
      expected,
    },
    message,
  });
}

/**
 * @param {TestState} state
 * @param {*} actual
 * @param {*} expected
 * @param {string} [message]
 */
function notEqual(state, actual, expected, message) {
  const passed = actual !== expected;

  state.assertions.push({
    type: "notEqual",
    passed,
    meta: {
      actual,
      expected,
    },
    message,
  });
}

/**
 * @param {TestState} state
 * @param {*} actual
 * @param {*} expected
 * @param {string} [message]
 */
function deepEqual(state, actual, expected, message) {
  let passed = true;
  let meta = undefined;

  try {
    deepStrictEqual(actual, expected);
  } catch (e) {
    passed = false;
    meta = {
      actual,
      expected,
    };

    if (e.generatedMessage) {
      meta.message = e.message;
    }
  }

  state.assertions.push({
    type: "deepEqual",
    passed,
    meta,
    message,
  });
}

/**
 * @param {TestState} state
 * @param {string} [message]
 */
function fail(state, message) {
  const passed = false;

  state.assertions.push({
    type: "fail",
    passed,
    meta: undefined,
    message,
  });
}

/**
 * @param {TestState} state
 * @param {string} [message]
 */
function pass(state, message) {
  const passed = true;

  state.assertions.push({
    type: "pass",
    passed,
    meta: undefined,
    message,
  });
}

/**
 * @param {TestState} state
 * @param {string} name
 * @param {TestCallback} callback
 */
function subTest(state, name, callback) {
  if (typeof name !== "string" || typeof callback !== "function") {
    throw new TypeError(
      `Expected t.test(string, function) received t.test(${typeof name}, ${typeof callback})`,
    );
  }

  const testState = {
    parent: state,
    hasFailure: false,
    name,
    callback,
    assertions: [],
    children: [],
  };

  state.children.push(testState);
}
