import { AppError } from "@compas/stdlib";
import { errorsThrowCombinedError } from "../errors.js";
import { stringFormatNameForError } from "../string-format.js";
import { structureNamedTypes } from "./structure.js";
import { typeDefinitionTraverse } from "./type-definition-traverse.js";

/**
 * Sourced from
 * https://github.com/microsoft/TypeScript/blob/66ecfcbd04b8234855a673adb85e5cff3f8458d4/src/compiler/types.ts#L112
 *
 * @type {string[]}
 */
const reservedGroupNames = [
  // Reserved words
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "false",
  "final",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "new",
  "null",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  // And strict mode included
  "implements",
  "interface",
  "let",
  "package",
  "private",
  "protected",
  "public",
  "static",
  "yield",
  // Other reserved names
  "common",
];

/**
 * Object keys are reserved to support atomic updates in the database queries.
 *
 * @type {string[]}
 */
const reservedObjectKeys = [
  "$negate",
  "$add",
  "$subtract",
  "$multiply",
  "$divide",
  "$append",
  "$set",
  "$remove",
];

/**
 * Check the full structure if a reserved name is used.
 *
 * These reserved names are not target language specific, so when adding support for a
 * new target language, it could be a breaking change for users of other targets. This
 * is done so a valid structure can be generated to all supported targets.
 *
 * @param {import("../generate").GenerateContext} ctx
 */
export function structureNameChecks(ctx) {
  /** @type {import("@compas/stdlib").AppError[]} */
  const errors = [];

  for (const group of Object.keys(ctx.structure)) {
    try {
      structureNameCheckForGroup(group);
    } catch (/** @type {any} */ e) {
      errors.push(e);
    }
  }

  for (const namedType of structureNamedTypes(ctx.structure)) {
    const typeStack = [];
    typeDefinitionTraverse(
      namedType,
      (type, callback) => {
        if (type.type === "object") {
          try {
            structureNameChecksForObject(type, typeStack);
          } catch (/** @type {any} */ e) {
            errors.push(e);
          }
        }

        callback(type);
      },
      {
        isInitialType: true,
        assignResult: false,
        beforeTraversal: (type) => {
          typeStack.push(stringFormatNameForError(type));
        },
        afterTraversal: () => {
          typeStack.pop();
        },
      },
    );
  }

  return errorsThrowCombinedError(errors);
}

/**
 * Execute the check on the provided type.
 *
 * @param {string} group
 */
export function structureNameCheckForGroup(group) {
  if (reservedGroupNames.includes(group)) {
    throw AppError.serverError({
      message: `Group name '${group}' is a reserved group name. Please use a different group name.`,
    });
  }
}

/**
 * Execute the check on this object keys
 *
 * @param {import("../generated/common/types").ExperimentalObjectDefinition} type
 * @param {string[]} typeStack
 */
export function structureNameChecksForObject(type, typeStack) {
  for (const key of Object.keys(type.keys)) {
    if (reservedObjectKeys.includes(key)) {
      throw AppError.serverError({
        message: `Object ${stringFormatNameForError(
          type,
        )} is using a reserved key '${key}'. Found via ${typeStack.join(
          " -> ",
        )}`,
      });
    }
  }
}
