// Generated by @compas/code-gen

import { validateStoreFileMeta } from "../store/validators.js";
/**
 * @template T, E
 * @typedef {{ value: T, error?: never}|{ value?: never, error: E }} Either
 */

/**
 * @typedef {Record<string, any|undefined>} ValidatorErrorMap
 */

/**
 * @param {import("../common/types").QueryResultStoreFileInput|any} value
 * @returns {Either<import("../common/types").QueryResultStoreFile, ValidatorErrorMap>}
 */
export function validateQueryResultStoreFile(value) {
  /** @type {ValidatorErrorMap} */
  const errorMap = {};
  /** @type {any} */
  let result = undefined;

  if (value === null || value === undefined) {
    errorMap[`$`] = {
      key: "validator.undefined",
    };
  } else {
    if (typeof value !== "object" || Array.isArray(value)) {
      errorMap[`$`] = {
        key: "validator.object",
        value: value,
        foundType: typeof value,
      };
    } else {
      /** @type {Set<string>} */
      const knownKeys0 = new Set([
        "id",
        "contentLength",
        "bucketName",
        "contentType",
        "name",
        "meta",
        "createdAt",
        "updatedAt",
      ]);
      for (const key of Object.keys(value)) {
        if (
          !knownKeys0.has(key) &&
          value[key] !== null &&
          value[key] !== undefined
        ) {
          errorMap[`$`] = {
            key: "validator.keys",
            expectedKeys: [...knownKeys0],
            foundKeys: Object.keys(value),
          };
          break;
        }
      }
      result = Object.create(null);

      if (value["id"] === null || value["id"] === undefined) {
        errorMap[`$.id`] = {
          key: "validator.undefined",
        };
      } else {
        if (
          typeof value["id"] !== "string" ||
          (!/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/gi.test(
            value["id"],
          ) &&
            !/^[a-f0-9]{32}$/gi.test(value["id"]))
        ) {
          errorMap[`$.id`] = {
            key: "validator.pattern",
            patternExplanation: "UUID",
          };
        } else if (value["id"].length === 32) {
          result["id"] =
            value["id"].slice(0, 8) +
            "-" +
            value["id"].slice(8, 12) +
            "-" +
            value["id"].slice(12, 16) +
            "-" +
            value["id"].slice(16, 20) +
            "-" +
            value["id"].slice(20);
        } else {
          result["id"] = value["id"];
        }
      }
      if (
        value["contentLength"] === null ||
        value["contentLength"] === undefined
      ) {
        errorMap[`$.contentLength`] = {
          key: "validator.undefined",
        };
      } else {
        let convertedNumber0 = value["contentLength"];
        if (
          typeof convertedNumber0 !== "number" &&
          typeof convertedNumber0 === "string"
        ) {
          convertedNumber0 = Number(convertedNumber0);
        }
        if (
          typeof convertedNumber0 !== "number" ||
          isNaN(convertedNumber0) ||
          !isFinite(convertedNumber0) ||
          !Number.isInteger(convertedNumber0)
        ) {
          errorMap[`$.contentLength`] = {
            key: "validator.number",
            subType: "int",
          };
        } else if (convertedNumber0 < -2147483647) {
          errorMap[`$.contentLength`] = {
            key: "validator.range",
            minValue: -2147483647,
          };
        } else if (convertedNumber0 > 2147483647) {
          errorMap[`$.contentLength`] = {
            key: "validator.range",
            maxValue: 2147483647,
          };
        } else {
          result["contentLength"] = convertedNumber0;
        }
      }
      if (value["bucketName"] === null || value["bucketName"] === undefined) {
        errorMap[`$.bucketName`] = {
          key: "validator.undefined",
        };
      } else {
        /** @type {string} */
        let convertedString0 = value["bucketName"];
        if (typeof convertedString0 !== "string") {
          errorMap[`$.bucketName`] = {
            key: "validator.string",
          };
        } else {
          if (convertedString0.length < 1) {
            errorMap[`$.bucketName`] = {
              key: "validator.length",
              minLength: 1,
            };
          } else {
            result["bucketName"] = convertedString0;
          }
        }
      }
      if (value["contentType"] === null || value["contentType"] === undefined) {
        errorMap[`$.contentType`] = {
          key: "validator.undefined",
        };
      } else {
        /** @type {string} */
        let convertedString0 = value["contentType"];
        if (typeof convertedString0 !== "string") {
          errorMap[`$.contentType`] = {
            key: "validator.string",
          };
        } else {
          if (convertedString0.length < 1) {
            errorMap[`$.contentType`] = {
              key: "validator.length",
              minLength: 1,
            };
          } else {
            result["contentType"] = convertedString0;
          }
        }
      }
      if (value["name"] === null || value["name"] === undefined) {
        errorMap[`$.name`] = {
          key: "validator.undefined",
        };
      } else {
        /** @type {string} */
        let convertedString0 = value["name"];
        if (typeof convertedString0 !== "string") {
          errorMap[`$.name`] = {
            key: "validator.string",
          };
        } else {
          if (convertedString0.length < 1) {
            errorMap[`$.name`] = {
              key: "validator.length",
              minLength: 1,
            };
          } else {
            result["name"] = convertedString0;
          }
        }
      }
      if (value["meta"] === null || value["meta"] === undefined) {
        result["meta"] = {};
      } else {
        const refResult0 = validateStoreFileMeta(value["meta"]);

        if (refResult0.error) {
          for (const errorKey of Object.keys(refResult0.error)) {
            errorMap[`$.meta${errorKey.substring(1)}`] =
              refResult0.error[errorKey];
          }
        }
        result["meta"] = refResult0.value;
      }
      if (value["createdAt"] === null || value["createdAt"] === undefined) {
        errorMap[`$.createdAt`] = {
          key: "validator.undefined",
        };
      } else {
        if (
          typeof value["createdAt"] === "string" ||
          typeof value["createdAt"] === "number"
        ) {
          result["createdAt"] = new Date(value["createdAt"]);
        } else if (
          Object.prototype.toString.call(value["createdAt"]) === "[object Date]"
        ) {
          result["createdAt"] = value["createdAt"];
        } else {
          errorMap[`$.createdAt`] = {
            key: "validator.type",
            expectedType: "Date|string",
          };
        }
        if (isNaN(result["createdAt"]?.getTime() ?? undefined)) {
          errorMap[`$.createdAt`] = {
            key: "validator.date.invalid",
          };
        }
      }
      if (value["updatedAt"] === null || value["updatedAt"] === undefined) {
        errorMap[`$.updatedAt`] = {
          key: "validator.undefined",
        };
      } else {
        if (
          typeof value["updatedAt"] === "string" ||
          typeof value["updatedAt"] === "number"
        ) {
          result["updatedAt"] = new Date(value["updatedAt"]);
        } else if (
          Object.prototype.toString.call(value["updatedAt"]) === "[object Date]"
        ) {
          result["updatedAt"] = value["updatedAt"];
        } else {
          errorMap[`$.updatedAt`] = {
            key: "validator.type",
            expectedType: "Date|string",
          };
        }
        if (isNaN(result["updatedAt"]?.getTime() ?? undefined)) {
          errorMap[`$.updatedAt`] = {
            key: "validator.date.invalid",
          };
        }
      }
    }
  }
  if (Object.keys(errorMap).length > 0) {
    return { error: errorMap };
  }
  return { value: result };
}

/**
 * @param {import("../common/types").QueryResultStoreJobInput|any} value
 * @returns {Either<import("../common/types").QueryResultStoreJob, ValidatorErrorMap>}
 */
export function validateQueryResultStoreJob(value) {
  /** @type {ValidatorErrorMap} */
  const errorMap = {};
  /** @type {any} */
  let result = undefined;

  if (value === null || value === undefined) {
    errorMap[`$`] = {
      key: "validator.undefined",
    };
  } else {
    if (typeof value !== "object" || Array.isArray(value)) {
      errorMap[`$`] = {
        key: "validator.object",
        value: value,
        foundType: typeof value,
      };
    } else {
      /** @type {Set<string>} */
      const knownKeys0 = new Set([
        "id",
        "isComplete",
        "handlerTimeout",
        "priority",
        "retryCount",
        "name",
        "scheduledAt",
        "data",
        "createdAt",
        "updatedAt",
      ]);
      for (const key of Object.keys(value)) {
        if (
          !knownKeys0.has(key) &&
          value[key] !== null &&
          value[key] !== undefined
        ) {
          errorMap[`$`] = {
            key: "validator.keys",
            expectedKeys: [...knownKeys0],
            foundKeys: Object.keys(value),
          };
          break;
        }
      }
      result = Object.create(null);

      if (value["id"] === null || value["id"] === undefined) {
        errorMap[`$.id`] = {
          key: "validator.undefined",
        };
      } else {
        let convertedNumber0 = value["id"];
        if (
          typeof convertedNumber0 !== "number" &&
          typeof convertedNumber0 === "string"
        ) {
          convertedNumber0 = Number(convertedNumber0);
        }
        if (
          typeof convertedNumber0 !== "number" ||
          isNaN(convertedNumber0) ||
          !isFinite(convertedNumber0) ||
          !Number.isInteger(convertedNumber0)
        ) {
          errorMap[`$.id`] = {
            key: "validator.number",
            subType: "int",
          };
        } else if (convertedNumber0 < -2147483647) {
          errorMap[`$.id`] = {
            key: "validator.range",
            minValue: -2147483647,
          };
        } else if (convertedNumber0 > 2147483647) {
          errorMap[`$.id`] = {
            key: "validator.range",
            maxValue: 2147483647,
          };
        } else {
          result["id"] = convertedNumber0;
        }
      }
      if (value["isComplete"] === null || value["isComplete"] === undefined) {
        result["isComplete"] = false;
      } else {
        if (
          value["isComplete"] === true ||
          value["isComplete"] === "true" ||
          value["isComplete"] === 1
        ) {
          result["isComplete"] = true;
        } else if (
          value["isComplete"] === false ||
          value["isComplete"] === "false" ||
          value["isComplete"] === 0
        ) {
          result["isComplete"] = false;
        } else {
          errorMap[`$.isComplete`] = {
            key: "validator.type",
            expectedType: "boolean",
          };
        }
      }
      if (
        value["handlerTimeout"] === null ||
        value["handlerTimeout"] === undefined
      ) {
        result["handlerTimeout"] = undefined;
      } else {
        let convertedNumber0 = value["handlerTimeout"];
        if (
          typeof convertedNumber0 !== "number" &&
          typeof convertedNumber0 === "string"
        ) {
          convertedNumber0 = Number(convertedNumber0);
        }
        if (
          typeof convertedNumber0 !== "number" ||
          isNaN(convertedNumber0) ||
          !isFinite(convertedNumber0) ||
          !Number.isInteger(convertedNumber0)
        ) {
          errorMap[`$.handlerTimeout`] = {
            key: "validator.number",
            subType: "int",
          };
        } else if (convertedNumber0 < 0) {
          errorMap[`$.handlerTimeout`] = {
            key: "validator.range",
            minValue: 0,
          };
        } else {
          result["handlerTimeout"] = convertedNumber0;
        }
      }
      if (value["priority"] === null || value["priority"] === undefined) {
        result["priority"] = 0;
      } else {
        let convertedNumber0 = value["priority"];
        if (
          typeof convertedNumber0 !== "number" &&
          typeof convertedNumber0 === "string"
        ) {
          convertedNumber0 = Number(convertedNumber0);
        }
        if (
          typeof convertedNumber0 !== "number" ||
          isNaN(convertedNumber0) ||
          !isFinite(convertedNumber0) ||
          !Number.isInteger(convertedNumber0)
        ) {
          errorMap[`$.priority`] = {
            key: "validator.number",
            subType: "int",
          };
        } else if (convertedNumber0 < 0) {
          errorMap[`$.priority`] = {
            key: "validator.range",
            minValue: 0,
          };
        } else {
          result["priority"] = convertedNumber0;
        }
      }
      if (value["retryCount"] === null || value["retryCount"] === undefined) {
        result["retryCount"] = 0;
      } else {
        let convertedNumber0 = value["retryCount"];
        if (
          typeof convertedNumber0 !== "number" &&
          typeof convertedNumber0 === "string"
        ) {
          convertedNumber0 = Number(convertedNumber0);
        }
        if (
          typeof convertedNumber0 !== "number" ||
          isNaN(convertedNumber0) ||
          !isFinite(convertedNumber0) ||
          !Number.isInteger(convertedNumber0)
        ) {
          errorMap[`$.retryCount`] = {
            key: "validator.number",
            subType: "int",
          };
        } else if (convertedNumber0 < -2147483647) {
          errorMap[`$.retryCount`] = {
            key: "validator.range",
            minValue: -2147483647,
          };
        } else if (convertedNumber0 > 2147483647) {
          errorMap[`$.retryCount`] = {
            key: "validator.range",
            maxValue: 2147483647,
          };
        } else {
          result["retryCount"] = convertedNumber0;
        }
      }
      if (value["name"] === null || value["name"] === undefined) {
        errorMap[`$.name`] = {
          key: "validator.undefined",
        };
      } else {
        /** @type {string} */
        let convertedString0 = value["name"];
        if (typeof convertedString0 !== "string") {
          errorMap[`$.name`] = {
            key: "validator.string",
          };
        } else {
          if (convertedString0.length < 1) {
            errorMap[`$.name`] = {
              key: "validator.length",
              minLength: 1,
            };
          } else {
            result["name"] = convertedString0;
          }
        }
      }
      if (value["scheduledAt"] === null || value["scheduledAt"] === undefined) {
        result["scheduledAt"] = new Date();
      } else {
        if (
          typeof value["scheduledAt"] === "string" ||
          typeof value["scheduledAt"] === "number"
        ) {
          result["scheduledAt"] = new Date(value["scheduledAt"]);
        } else if (
          Object.prototype.toString.call(value["scheduledAt"]) ===
          "[object Date]"
        ) {
          result["scheduledAt"] = value["scheduledAt"];
        } else {
          errorMap[`$.scheduledAt`] = {
            key: "validator.type",
            expectedType: "Date|string",
          };
        }
        if (isNaN(result["scheduledAt"]?.getTime() ?? undefined)) {
          errorMap[`$.scheduledAt`] = {
            key: "validator.date.invalid",
          };
        }
      }
      if (value["data"] === null || value["data"] === undefined) {
        result["data"] = {};
      } else {
        result["data"] = value["data"];
      }
      if (value["createdAt"] === null || value["createdAt"] === undefined) {
        errorMap[`$.createdAt`] = {
          key: "validator.undefined",
        };
      } else {
        if (
          typeof value["createdAt"] === "string" ||
          typeof value["createdAt"] === "number"
        ) {
          result["createdAt"] = new Date(value["createdAt"]);
        } else if (
          Object.prototype.toString.call(value["createdAt"]) === "[object Date]"
        ) {
          result["createdAt"] = value["createdAt"];
        } else {
          errorMap[`$.createdAt`] = {
            key: "validator.type",
            expectedType: "Date|string",
          };
        }
        if (isNaN(result["createdAt"]?.getTime() ?? undefined)) {
          errorMap[`$.createdAt`] = {
            key: "validator.date.invalid",
          };
        }
      }
      if (value["updatedAt"] === null || value["updatedAt"] === undefined) {
        errorMap[`$.updatedAt`] = {
          key: "validator.undefined",
        };
      } else {
        if (
          typeof value["updatedAt"] === "string" ||
          typeof value["updatedAt"] === "number"
        ) {
          result["updatedAt"] = new Date(value["updatedAt"]);
        } else if (
          Object.prototype.toString.call(value["updatedAt"]) === "[object Date]"
        ) {
          result["updatedAt"] = value["updatedAt"];
        } else {
          errorMap[`$.updatedAt`] = {
            key: "validator.type",
            expectedType: "Date|string",
          };
        }
        if (isNaN(result["updatedAt"]?.getTime() ?? undefined)) {
          errorMap[`$.updatedAt`] = {
            key: "validator.date.invalid",
          };
        }
      }
    }
  }
  if (Object.keys(errorMap).length > 0) {
    return { error: errorMap };
  }
  return { value: result };
}

/**
 * @param {import("../common/types").QueryResultStoreSessionStoreInput|any} value
 * @returns {Either<import("../common/types").QueryResultStoreSessionStore, ValidatorErrorMap>}
 */
export function validateQueryResultStoreSessionStore(value) {
  /** @type {ValidatorErrorMap} */
  const errorMap = {};
  /** @type {any} */
  let result = undefined;

  if (value === null || value === undefined) {
    errorMap[`$`] = {
      key: "validator.undefined",
    };
  } else {
    if (typeof value !== "object" || Array.isArray(value)) {
      errorMap[`$`] = {
        key: "validator.object",
        value: value,
        foundType: typeof value,
      };
    } else {
      /** @type {Set<string>} */
      const knownKeys0 = new Set([
        "id",
        "checksum",
        "revokedAt",
        "data",
        "createdAt",
        "updatedAt",
        "accessTokens",
      ]);
      for (const key of Object.keys(value)) {
        if (
          !knownKeys0.has(key) &&
          value[key] !== null &&
          value[key] !== undefined
        ) {
          errorMap[`$`] = {
            key: "validator.keys",
            expectedKeys: [...knownKeys0],
            foundKeys: Object.keys(value),
          };
          break;
        }
      }
      result = Object.create(null);

      if (value["id"] === null || value["id"] === undefined) {
        errorMap[`$.id`] = {
          key: "validator.undefined",
        };
      } else {
        if (
          typeof value["id"] !== "string" ||
          (!/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/gi.test(
            value["id"],
          ) &&
            !/^[a-f0-9]{32}$/gi.test(value["id"]))
        ) {
          errorMap[`$.id`] = {
            key: "validator.pattern",
            patternExplanation: "UUID",
          };
        } else if (value["id"].length === 32) {
          result["id"] =
            value["id"].slice(0, 8) +
            "-" +
            value["id"].slice(8, 12) +
            "-" +
            value["id"].slice(12, 16) +
            "-" +
            value["id"].slice(16, 20) +
            "-" +
            value["id"].slice(20);
        } else {
          result["id"] = value["id"];
        }
      }
      if (value["checksum"] === null || value["checksum"] === undefined) {
        errorMap[`$.checksum`] = {
          key: "validator.undefined",
        };
      } else {
        /** @type {string} */
        let convertedString0 = value["checksum"];
        if (typeof convertedString0 !== "string") {
          errorMap[`$.checksum`] = {
            key: "validator.string",
          };
        } else {
          if (convertedString0.length < 1) {
            errorMap[`$.checksum`] = {
              key: "validator.length",
              minLength: 1,
            };
          } else {
            result["checksum"] = convertedString0;
          }
        }
      }
      if (value["revokedAt"] === null || value["revokedAt"] === undefined) {
        result["revokedAt"] = undefined;
      } else {
        if (
          typeof value["revokedAt"] === "string" ||
          typeof value["revokedAt"] === "number"
        ) {
          result["revokedAt"] = new Date(value["revokedAt"]);
        } else if (
          Object.prototype.toString.call(value["revokedAt"]) === "[object Date]"
        ) {
          result["revokedAt"] = value["revokedAt"];
        } else {
          errorMap[`$.revokedAt`] = {
            key: "validator.type",
            expectedType: "Date|string",
          };
        }
        if (isNaN(result["revokedAt"]?.getTime() ?? undefined)) {
          errorMap[`$.revokedAt`] = {
            key: "validator.date.invalid",
          };
        }
      }
      if (value["data"] === null || value["data"] === undefined) {
        result["data"] = {};
      } else {
        result["data"] = value["data"];
      }
      if (value["createdAt"] === null || value["createdAt"] === undefined) {
        errorMap[`$.createdAt`] = {
          key: "validator.undefined",
        };
      } else {
        if (
          typeof value["createdAt"] === "string" ||
          typeof value["createdAt"] === "number"
        ) {
          result["createdAt"] = new Date(value["createdAt"]);
        } else if (
          Object.prototype.toString.call(value["createdAt"]) === "[object Date]"
        ) {
          result["createdAt"] = value["createdAt"];
        } else {
          errorMap[`$.createdAt`] = {
            key: "validator.type",
            expectedType: "Date|string",
          };
        }
        if (isNaN(result["createdAt"]?.getTime() ?? undefined)) {
          errorMap[`$.createdAt`] = {
            key: "validator.date.invalid",
          };
        }
      }
      if (value["updatedAt"] === null || value["updatedAt"] === undefined) {
        errorMap[`$.updatedAt`] = {
          key: "validator.undefined",
        };
      } else {
        if (
          typeof value["updatedAt"] === "string" ||
          typeof value["updatedAt"] === "number"
        ) {
          result["updatedAt"] = new Date(value["updatedAt"]);
        } else if (
          Object.prototype.toString.call(value["updatedAt"]) === "[object Date]"
        ) {
          result["updatedAt"] = value["updatedAt"];
        } else {
          errorMap[`$.updatedAt`] = {
            key: "validator.type",
            expectedType: "Date|string",
          };
        }
        if (isNaN(result["updatedAt"]?.getTime() ?? undefined)) {
          errorMap[`$.updatedAt`] = {
            key: "validator.date.invalid",
          };
        }
      }
      if (
        value["accessTokens"] === null ||
        value["accessTokens"] === undefined
      ) {
        result["accessTokens"] = undefined;
      } else {
        /** @type {ValidatorErrorMap} */
        const intermediateErrorMap1 = {};
        /** @type {any[]} */
        let intermediateResult1 = [];
        /** @type {any|any[]} */
        let intermediateValue1 = value["accessTokens"];

        if (!Array.isArray(intermediateValue1)) {
          intermediateValue1 = [intermediateValue1];
        }
        result["accessTokens"] = Array.from({
          length: intermediateValue1.length,
        });
        for (let i1 = 0; i1 < intermediateValue1.length; ++i1) {
          if (
            intermediateValue1[i1] === null ||
            intermediateValue1[i1] === undefined
          ) {
            intermediateErrorMap1[`$.${i1}`] = {
              key: "validator.undefined",
            };
          } else {
            const refResult1 = validateQueryResultStoreSessionStoreToken(
              intermediateValue1[i1],
            );

            if (refResult1.error) {
              for (const errorKey of Object.keys(refResult1.error)) {
                intermediateErrorMap1[`$.${i1}${errorKey.substring(1)}`] =
                  refResult1.error[errorKey];
              }
            }
            intermediateResult1[i1] = refResult1.value;
          }
        }
        if (Object.keys(intermediateErrorMap1).length) {
          for (const errorKey of Object.keys(intermediateErrorMap1)) {
            errorMap[`$.accessTokens${errorKey.substring(1)}`] =
              intermediateErrorMap1[errorKey];
          }
        } else {
          result["accessTokens"] = intermediateResult1;
        }
      }
    }
  }
  if (Object.keys(errorMap).length > 0) {
    return { error: errorMap };
  }
  return { value: result };
}

/**
 * @param {import("../common/types").QueryResultStoreSessionStoreTokenInput|any} value
 * @returns {Either<import("../common/types").QueryResultStoreSessionStoreToken, ValidatorErrorMap>}
 */
export function validateQueryResultStoreSessionStoreToken(value) {
  /** @type {ValidatorErrorMap} */
  const errorMap = {};
  /** @type {any} */
  let result = undefined;

  if (value === null || value === undefined) {
    errorMap[`$`] = {
      key: "validator.undefined",
    };
  } else {
    if (typeof value !== "object" || Array.isArray(value)) {
      errorMap[`$`] = {
        key: "validator.object",
        value: value,
        foundType: typeof value,
      };
    } else {
      /** @type {Set<string>} */
      const knownKeys0 = new Set([
        "id",
        "session",
        "expiresAt",
        "refreshToken",
        "revokedAt",
        "createdAt",
        "accessToken",
      ]);
      for (const key of Object.keys(value)) {
        if (
          !knownKeys0.has(key) &&
          value[key] !== null &&
          value[key] !== undefined
        ) {
          errorMap[`$`] = {
            key: "validator.keys",
            expectedKeys: [...knownKeys0],
            foundKeys: Object.keys(value),
          };
          break;
        }
      }
      result = Object.create(null);

      if (value["id"] === null || value["id"] === undefined) {
        errorMap[`$.id`] = {
          key: "validator.undefined",
        };
      } else {
        if (
          typeof value["id"] !== "string" ||
          (!/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/gi.test(
            value["id"],
          ) &&
            !/^[a-f0-9]{32}$/gi.test(value["id"]))
        ) {
          errorMap[`$.id`] = {
            key: "validator.pattern",
            patternExplanation: "UUID",
          };
        } else if (value["id"].length === 32) {
          result["id"] =
            value["id"].slice(0, 8) +
            "-" +
            value["id"].slice(8, 12) +
            "-" +
            value["id"].slice(12, 16) +
            "-" +
            value["id"].slice(16, 20) +
            "-" +
            value["id"].slice(20);
        } else {
          result["id"] = value["id"];
        }
      }
      if (value["session"] === null || value["session"] === undefined) {
        errorMap[`$.session`] = {
          key: "validator.undefined",
        };
      } else {
        let hasAnyOfMatch0 = false;
        errorMap[`$.session`] = {
          key: "validator.anyOf",
          errors: [],
        };
        if (!hasAnyOfMatch0) {
          /** @type {ValidatorErrorMap} */
          const intermediateErrorMap2 = {};
          /** @type {any} */
          let intermediateResult2 = undefined;
          /** @type {any} */
          let intermediateValue2 = value["session"];

          if (intermediateValue2 === null || intermediateValue2 === undefined) {
            intermediateErrorMap2[`$`] = {
              key: "validator.undefined",
            };
          } else {
            if (
              typeof intermediateValue2 !== "string" ||
              (!/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/gi.test(
                intermediateValue2,
              ) &&
                !/^[a-f0-9]{32}$/gi.test(intermediateValue2))
            ) {
              intermediateErrorMap2[`$`] = {
                key: "validator.pattern",
                patternExplanation: "UUID",
              };
            } else if (intermediateValue2.length === 32) {
              intermediateResult2 =
                intermediateValue2.slice(0, 8) +
                "-" +
                intermediateValue2.slice(8, 12) +
                "-" +
                intermediateValue2.slice(12, 16) +
                "-" +
                intermediateValue2.slice(16, 20) +
                "-" +
                intermediateValue2.slice(20);
            } else {
              intermediateResult2 = intermediateValue2;
            }
          }
          if (Object.keys(intermediateErrorMap2).length > 0) {
            errorMap[`$.session`].errors.push(intermediateErrorMap2);
          } else {
            hasAnyOfMatch0 = true;
            delete errorMap[`$.session`];
            result["session"] = intermediateResult2;
          }
        }
        if (!hasAnyOfMatch0) {
          /** @type {ValidatorErrorMap} */
          const intermediateErrorMap2 = {};
          /** @type {any} */
          let intermediateResult2 = undefined;
          /** @type {any} */
          let intermediateValue2 = value["session"];

          if (intermediateValue2 === null || intermediateValue2 === undefined) {
            intermediateErrorMap2[`$`] = {
              key: "validator.undefined",
            };
          } else {
            const refResult2 =
              validateQueryResultStoreSessionStore(intermediateValue2);

            if (refResult2.error) {
              for (const errorKey of Object.keys(refResult2.error)) {
                intermediateErrorMap2[`$${errorKey.substring(1)}`] =
                  refResult2.error[errorKey];
              }
            }
            intermediateResult2 = refResult2.value;
          }
          if (Object.keys(intermediateErrorMap2).length > 0) {
            errorMap[`$.session`].errors.push(intermediateErrorMap2);
          } else {
            hasAnyOfMatch0 = true;
            delete errorMap[`$.session`];
            result["session"] = intermediateResult2;
          }
        }
      }
      if (value["expiresAt"] === null || value["expiresAt"] === undefined) {
        errorMap[`$.expiresAt`] = {
          key: "validator.undefined",
        };
      } else {
        if (
          typeof value["expiresAt"] === "string" ||
          typeof value["expiresAt"] === "number"
        ) {
          result["expiresAt"] = new Date(value["expiresAt"]);
        } else if (
          Object.prototype.toString.call(value["expiresAt"]) === "[object Date]"
        ) {
          result["expiresAt"] = value["expiresAt"];
        } else {
          errorMap[`$.expiresAt`] = {
            key: "validator.type",
            expectedType: "Date|string",
          };
        }
        if (isNaN(result["expiresAt"]?.getTime() ?? undefined)) {
          errorMap[`$.expiresAt`] = {
            key: "validator.date.invalid",
          };
        }
      }
      if (
        value["refreshToken"] === null ||
        value["refreshToken"] === undefined
      ) {
        result["refreshToken"] = undefined;
      } else {
        let hasAnyOfMatch0 = false;
        errorMap[`$.refreshToken`] = {
          key: "validator.anyOf",
          errors: [],
        };
        if (!hasAnyOfMatch0) {
          /** @type {ValidatorErrorMap} */
          const intermediateErrorMap2 = {};
          /** @type {any} */
          let intermediateResult2 = undefined;
          /** @type {any} */
          let intermediateValue2 = value["refreshToken"];

          if (intermediateValue2 === null || intermediateValue2 === undefined) {
            intermediateResult2 = undefined;
          } else {
            if (
              typeof intermediateValue2 !== "string" ||
              (!/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/gi.test(
                intermediateValue2,
              ) &&
                !/^[a-f0-9]{32}$/gi.test(intermediateValue2))
            ) {
              intermediateErrorMap2[`$`] = {
                key: "validator.pattern",
                patternExplanation: "UUID",
              };
            } else if (intermediateValue2.length === 32) {
              intermediateResult2 =
                intermediateValue2.slice(0, 8) +
                "-" +
                intermediateValue2.slice(8, 12) +
                "-" +
                intermediateValue2.slice(12, 16) +
                "-" +
                intermediateValue2.slice(16, 20) +
                "-" +
                intermediateValue2.slice(20);
            } else {
              intermediateResult2 = intermediateValue2;
            }
          }
          if (Object.keys(intermediateErrorMap2).length > 0) {
            errorMap[`$.refreshToken`].errors.push(intermediateErrorMap2);
          } else {
            hasAnyOfMatch0 = true;
            delete errorMap[`$.refreshToken`];
            result["refreshToken"] = intermediateResult2;
          }
        }
        if (!hasAnyOfMatch0) {
          /** @type {ValidatorErrorMap} */
          const intermediateErrorMap2 = {};
          /** @type {any} */
          let intermediateResult2 = undefined;
          /** @type {any} */
          let intermediateValue2 = value["refreshToken"];

          if (intermediateValue2 === null || intermediateValue2 === undefined) {
            intermediateErrorMap2[`$`] = {
              key: "validator.undefined",
            };
          } else {
            const refResult2 =
              validateQueryResultStoreSessionStoreToken(intermediateValue2);

            if (refResult2.error) {
              for (const errorKey of Object.keys(refResult2.error)) {
                intermediateErrorMap2[`$${errorKey.substring(1)}`] =
                  refResult2.error[errorKey];
              }
            }
            intermediateResult2 = refResult2.value;
          }
          if (Object.keys(intermediateErrorMap2).length > 0) {
            errorMap[`$.refreshToken`].errors.push(intermediateErrorMap2);
          } else {
            hasAnyOfMatch0 = true;
            delete errorMap[`$.refreshToken`];
            result["refreshToken"] = intermediateResult2;
          }
        }
      }
      if (value["revokedAt"] === null || value["revokedAt"] === undefined) {
        result["revokedAt"] = undefined;
      } else {
        if (
          typeof value["revokedAt"] === "string" ||
          typeof value["revokedAt"] === "number"
        ) {
          result["revokedAt"] = new Date(value["revokedAt"]);
        } else if (
          Object.prototype.toString.call(value["revokedAt"]) === "[object Date]"
        ) {
          result["revokedAt"] = value["revokedAt"];
        } else {
          errorMap[`$.revokedAt`] = {
            key: "validator.type",
            expectedType: "Date|string",
          };
        }
        if (isNaN(result["revokedAt"]?.getTime() ?? undefined)) {
          errorMap[`$.revokedAt`] = {
            key: "validator.date.invalid",
          };
        }
      }
      if (value["createdAt"] === null || value["createdAt"] === undefined) {
        errorMap[`$.createdAt`] = {
          key: "validator.undefined",
        };
      } else {
        if (
          typeof value["createdAt"] === "string" ||
          typeof value["createdAt"] === "number"
        ) {
          result["createdAt"] = new Date(value["createdAt"]);
        } else if (
          Object.prototype.toString.call(value["createdAt"]) === "[object Date]"
        ) {
          result["createdAt"] = value["createdAt"];
        } else {
          errorMap[`$.createdAt`] = {
            key: "validator.type",
            expectedType: "Date|string",
          };
        }
        if (isNaN(result["createdAt"]?.getTime() ?? undefined)) {
          errorMap[`$.createdAt`] = {
            key: "validator.date.invalid",
          };
        }
      }
      if (value["accessToken"] === null || value["accessToken"] === undefined) {
        result["accessToken"] = undefined;
      } else {
        const refResult0 = validateQueryResultStoreSessionStoreToken(
          value["accessToken"],
        );

        if (refResult0.error) {
          for (const errorKey of Object.keys(refResult0.error)) {
            errorMap[`$.accessToken${errorKey.substring(1)}`] =
              refResult0.error[errorKey];
          }
        }
        result["accessToken"] = refResult0.value;
      }
    }
  }
  if (Object.keys(errorMap).length > 0) {
    return { error: errorMap };
  }
  return { value: result };
}
