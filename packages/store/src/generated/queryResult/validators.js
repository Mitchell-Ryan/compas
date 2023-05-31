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
          const expectedKeys = [...knownKeys0];
          const foundKeys = Object.keys(value);
          const unknownKeys = foundKeys.filter((it) => !knownKeys0.has(it));
          errorMap[`$`] = {
            key: "validator.keys",
            unknownKeys,
            expectedKeys,
            foundKeys,
          };
          break;
        }
      }
      result = {
        id: undefined,
        contentLength: undefined,
        bucketName: undefined,
        contentType: undefined,
        name: undefined,
        meta: undefined,
        createdAt: undefined,
        updatedAt: undefined,
      };

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
        let convertedNumber2 = value["contentLength"];
        if (
          typeof convertedNumber2 !== "number" &&
          typeof convertedNumber2 === "string"
        ) {
          convertedNumber2 = Number(convertedNumber2);
        }
        if (
          typeof convertedNumber2 !== "number" ||
          isNaN(convertedNumber2) ||
          !isFinite(convertedNumber2) ||
          !Number.isInteger(convertedNumber2)
        ) {
          errorMap[`$.contentLength`] = {
            key: "validator.number",
            subType: "int",
          };
        } else if (convertedNumber2 < -2147483647) {
          errorMap[`$.contentLength`] = {
            key: "validator.range",
            minValue: -2147483647,
          };
        } else if (convertedNumber2 > 2147483647) {
          errorMap[`$.contentLength`] = {
            key: "validator.range",
            maxValue: 2147483647,
          };
        } else {
          result["contentLength"] = convertedNumber2;
        }
      }
      if (value["bucketName"] === null || value["bucketName"] === undefined) {
        errorMap[`$.bucketName`] = {
          key: "validator.undefined",
        };
      } else {
        /** @type {string} */
        let convertedString3 = value["bucketName"];
        if (typeof convertedString3 !== "string") {
          errorMap[`$.bucketName`] = {
            key: "validator.string",
          };
        } else {
          if (convertedString3.length < 1) {
            errorMap[`$.bucketName`] = {
              key: "validator.length",
              minLength: 1,
            };
          } else {
            result["bucketName"] = convertedString3;
          }
        }
      }
      if (value["contentType"] === null || value["contentType"] === undefined) {
        errorMap[`$.contentType`] = {
          key: "validator.undefined",
        };
      } else {
        /** @type {string} */
        let convertedString4 = value["contentType"];
        if (typeof convertedString4 !== "string") {
          errorMap[`$.contentType`] = {
            key: "validator.string",
          };
        } else {
          if (convertedString4.length < 1) {
            errorMap[`$.contentType`] = {
              key: "validator.length",
              minLength: 1,
            };
          } else {
            result["contentType"] = convertedString4;
          }
        }
      }
      if (value["name"] === null || value["name"] === undefined) {
        errorMap[`$.name`] = {
          key: "validator.undefined",
        };
      } else {
        /** @type {string} */
        let convertedString5 = value["name"];
        if (typeof convertedString5 !== "string") {
          errorMap[`$.name`] = {
            key: "validator.string",
          };
        } else {
          if (convertedString5.length < 1) {
            errorMap[`$.name`] = {
              key: "validator.length",
              minLength: 1,
            };
          } else {
            result["name"] = convertedString5;
          }
        }
      }
      if (value["meta"] === null || value["meta"] === undefined) {
        result["meta"] = {};
      } else {
        const refResult6 = validateStoreFileMeta(value["meta"]);

        if (refResult6.error) {
          for (const errorKey of Object.keys(refResult6.error)) {
            errorMap[`$.meta${errorKey.substring(1)}`] =
              refResult6.error[errorKey];
          }
        }
        result["meta"] = refResult6.value;
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
          const expectedKeys = [...knownKeys0];
          const foundKeys = Object.keys(value);
          const unknownKeys = foundKeys.filter((it) => !knownKeys0.has(it));
          errorMap[`$`] = {
            key: "validator.keys",
            unknownKeys,
            expectedKeys,
            foundKeys,
          };
          break;
        }
      }
      result = {
        id: undefined,
        isComplete: undefined,
        handlerTimeout: undefined,
        priority: undefined,
        retryCount: undefined,
        name: undefined,
        scheduledAt: undefined,
        data: undefined,
        createdAt: undefined,
        updatedAt: undefined,
      };

      if (value["id"] === null || value["id"] === undefined) {
        errorMap[`$.id`] = {
          key: "validator.undefined",
        };
      } else {
        let convertedNumber1 = value["id"];
        if (
          typeof convertedNumber1 !== "number" &&
          typeof convertedNumber1 === "string"
        ) {
          convertedNumber1 = Number(convertedNumber1);
        }
        if (
          typeof convertedNumber1 !== "number" ||
          isNaN(convertedNumber1) ||
          !isFinite(convertedNumber1) ||
          !Number.isInteger(convertedNumber1)
        ) {
          errorMap[`$.id`] = {
            key: "validator.number",
            subType: "int",
          };
        } else if (convertedNumber1 < -2147483647) {
          errorMap[`$.id`] = {
            key: "validator.range",
            minValue: -2147483647,
          };
        } else if (convertedNumber1 > 2147483647) {
          errorMap[`$.id`] = {
            key: "validator.range",
            maxValue: 2147483647,
          };
        } else {
          result["id"] = convertedNumber1;
        }
      }
      if (value["isComplete"] === null || value["isComplete"] === undefined) {
        result["isComplete"] = false;
      } else {
        if (
          value["isComplete"] === true ||
          value["isComplete"] === "true" ||
          value["isComplete"] === 1 ||
          value["isComplete"] === "1"
        ) {
          result["isComplete"] = true;
        } else if (
          value["isComplete"] === false ||
          value["isComplete"] === "false" ||
          value["isComplete"] === 0 ||
          value["isComplete"] === "0"
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
        let convertedNumber3 = value["handlerTimeout"];
        if (
          typeof convertedNumber3 !== "number" &&
          typeof convertedNumber3 === "string"
        ) {
          convertedNumber3 = Number(convertedNumber3);
        }
        if (
          typeof convertedNumber3 !== "number" ||
          isNaN(convertedNumber3) ||
          !isFinite(convertedNumber3) ||
          !Number.isInteger(convertedNumber3)
        ) {
          errorMap[`$.handlerTimeout`] = {
            key: "validator.number",
            subType: "int",
          };
        } else if (convertedNumber3 < 0) {
          errorMap[`$.handlerTimeout`] = {
            key: "validator.range",
            minValue: 0,
          };
        } else {
          result["handlerTimeout"] = convertedNumber3;
        }
      }
      if (value["priority"] === null || value["priority"] === undefined) {
        result["priority"] = 0;
      } else {
        let convertedNumber4 = value["priority"];
        if (
          typeof convertedNumber4 !== "number" &&
          typeof convertedNumber4 === "string"
        ) {
          convertedNumber4 = Number(convertedNumber4);
        }
        if (
          typeof convertedNumber4 !== "number" ||
          isNaN(convertedNumber4) ||
          !isFinite(convertedNumber4) ||
          !Number.isInteger(convertedNumber4)
        ) {
          errorMap[`$.priority`] = {
            key: "validator.number",
            subType: "int",
          };
        } else if (convertedNumber4 < 0) {
          errorMap[`$.priority`] = {
            key: "validator.range",
            minValue: 0,
          };
        } else {
          result["priority"] = convertedNumber4;
        }
      }
      if (value["retryCount"] === null || value["retryCount"] === undefined) {
        result["retryCount"] = 0;
      } else {
        let convertedNumber5 = value["retryCount"];
        if (
          typeof convertedNumber5 !== "number" &&
          typeof convertedNumber5 === "string"
        ) {
          convertedNumber5 = Number(convertedNumber5);
        }
        if (
          typeof convertedNumber5 !== "number" ||
          isNaN(convertedNumber5) ||
          !isFinite(convertedNumber5) ||
          !Number.isInteger(convertedNumber5)
        ) {
          errorMap[`$.retryCount`] = {
            key: "validator.number",
            subType: "int",
          };
        } else if (convertedNumber5 < -2147483647) {
          errorMap[`$.retryCount`] = {
            key: "validator.range",
            minValue: -2147483647,
          };
        } else if (convertedNumber5 > 2147483647) {
          errorMap[`$.retryCount`] = {
            key: "validator.range",
            maxValue: 2147483647,
          };
        } else {
          result["retryCount"] = convertedNumber5;
        }
      }
      if (value["name"] === null || value["name"] === undefined) {
        errorMap[`$.name`] = {
          key: "validator.undefined",
        };
      } else {
        /** @type {string} */
        let convertedString6 = value["name"];
        if (typeof convertedString6 !== "string") {
          errorMap[`$.name`] = {
            key: "validator.string",
          };
        } else {
          if (convertedString6.length < 1) {
            errorMap[`$.name`] = {
              key: "validator.length",
              minLength: 1,
            };
          } else {
            result["name"] = convertedString6;
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
          const expectedKeys = [...knownKeys0];
          const foundKeys = Object.keys(value);
          const unknownKeys = foundKeys.filter((it) => !knownKeys0.has(it));
          errorMap[`$`] = {
            key: "validator.keys",
            unknownKeys,
            expectedKeys,
            foundKeys,
          };
          break;
        }
      }
      result = {
        id: undefined,
        checksum: undefined,
        revokedAt: undefined,
        data: undefined,
        createdAt: undefined,
        updatedAt: undefined,
        accessTokens: undefined,
      };

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
        let convertedString2 = value["checksum"];
        if (typeof convertedString2 !== "string") {
          errorMap[`$.checksum`] = {
            key: "validator.string",
          };
        } else {
          if (convertedString2.length < 1) {
            errorMap[`$.checksum`] = {
              key: "validator.length",
              minLength: 1,
            };
          } else {
            result["checksum"] = convertedString2;
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
        const intermediateErrorMap8 = {};
        /** @type {any[]} */
        let intermediateResult8 = [];
        /** @type {any|any[]} */
        let intermediateValue8 = value["accessTokens"];

        if (!Array.isArray(intermediateValue8)) {
          errorMap[`$.accessTokens`] = {
            key: "validator.array",
            value: intermediateValue8,
          };
        } else {
          result["accessTokens"] = [];
          for (let i8 = 0; i8 < intermediateValue8.length; ++i8) {
            if (
              intermediateValue8[i8] === null ||
              intermediateValue8[i8] === undefined
            ) {
              intermediateErrorMap8[`$.${i8}`] = {
                key: "validator.undefined",
              };
            } else {
              const refResult8 = validateQueryResultStoreSessionStoreToken(
                intermediateValue8[i8],
              );

              if (refResult8.error) {
                for (const errorKey of Object.keys(refResult8.error)) {
                  intermediateErrorMap8[`$.${i8}${errorKey.substring(1)}`] =
                    refResult8.error[errorKey];
                }
              }
              intermediateResult8[i8] = refResult8.value;
            }
          }
        }
        if (Object.keys(intermediateErrorMap8).length) {
          for (const errorKey of Object.keys(intermediateErrorMap8)) {
            errorMap[`$.accessTokens${errorKey.substring(1)}`] =
              intermediateErrorMap8[errorKey];
          }
        } else {
          result["accessTokens"] = intermediateResult8;
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
          const expectedKeys = [...knownKeys0];
          const foundKeys = Object.keys(value);
          const unknownKeys = foundKeys.filter((it) => !knownKeys0.has(it));
          errorMap[`$`] = {
            key: "validator.keys",
            unknownKeys,
            expectedKeys,
            foundKeys,
          };
          break;
        }
      }
      result = {
        id: undefined,
        session: undefined,
        expiresAt: undefined,
        refreshToken: undefined,
        revokedAt: undefined,
        createdAt: undefined,
        accessToken: undefined,
      };

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
        let hasAnyOfMatch2 = false;
        errorMap[`$.session`] = {
          key: "validator.anyOf",
          errors: [],
        };
        if (!hasAnyOfMatch2) {
          /** @type {ValidatorErrorMap} */
          const intermediateErrorMap4 = {};
          /** @type {any} */
          let intermediateResult4 = undefined;
          /** @type {any} */
          let intermediateValue4 = value["session"];

          if (intermediateValue4 === null || intermediateValue4 === undefined) {
            intermediateErrorMap4[`$`] = {
              key: "validator.undefined",
            };
          } else {
            if (
              typeof intermediateValue4 !== "string" ||
              (!/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/gi.test(
                intermediateValue4,
              ) &&
                !/^[a-f0-9]{32}$/gi.test(intermediateValue4))
            ) {
              intermediateErrorMap4[`$`] = {
                key: "validator.pattern",
                patternExplanation: "UUID",
              };
            } else if (intermediateValue4.length === 32) {
              intermediateResult4 =
                intermediateValue4.slice(0, 8) +
                "-" +
                intermediateValue4.slice(8, 12) +
                "-" +
                intermediateValue4.slice(12, 16) +
                "-" +
                intermediateValue4.slice(16, 20) +
                "-" +
                intermediateValue4.slice(20);
            } else {
              intermediateResult4 = intermediateValue4;
            }
          }
          if (Object.keys(intermediateErrorMap4).length > 0) {
            errorMap[`$.session`].errors.push(intermediateErrorMap4);
          } else {
            hasAnyOfMatch2 = true;
            delete errorMap[`$.session`];
            result["session"] = intermediateResult4;
          }
        }
        if (!hasAnyOfMatch2) {
          /** @type {ValidatorErrorMap} */
          const intermediateErrorMap4 = {};
          /** @type {any} */
          let intermediateResult4 = undefined;
          /** @type {any} */
          let intermediateValue4 = value["session"];

          if (intermediateValue4 === null || intermediateValue4 === undefined) {
            intermediateErrorMap4[`$`] = {
              key: "validator.undefined",
            };
          } else {
            const refResult4 =
              validateQueryResultStoreSessionStore(intermediateValue4);

            if (refResult4.error) {
              for (const errorKey of Object.keys(refResult4.error)) {
                intermediateErrorMap4[`$${errorKey.substring(1)}`] =
                  refResult4.error[errorKey];
              }
            }
            intermediateResult4 = refResult4.value;
          }
          if (Object.keys(intermediateErrorMap4).length > 0) {
            errorMap[`$.session`].errors.push(intermediateErrorMap4);
          } else {
            hasAnyOfMatch2 = true;
            delete errorMap[`$.session`];
            result["session"] = intermediateResult4;
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
        let hasAnyOfMatch4 = false;
        errorMap[`$.refreshToken`] = {
          key: "validator.anyOf",
          errors: [],
        };
        if (!hasAnyOfMatch4) {
          /** @type {ValidatorErrorMap} */
          const intermediateErrorMap6 = {};
          /** @type {any} */
          let intermediateResult6 = undefined;
          /** @type {any} */
          let intermediateValue6 = value["refreshToken"];

          if (intermediateValue6 === null || intermediateValue6 === undefined) {
            intermediateResult6 = undefined;
          } else {
            if (
              typeof intermediateValue6 !== "string" ||
              (!/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/gi.test(
                intermediateValue6,
              ) &&
                !/^[a-f0-9]{32}$/gi.test(intermediateValue6))
            ) {
              intermediateErrorMap6[`$`] = {
                key: "validator.pattern",
                patternExplanation: "UUID",
              };
            } else if (intermediateValue6.length === 32) {
              intermediateResult6 =
                intermediateValue6.slice(0, 8) +
                "-" +
                intermediateValue6.slice(8, 12) +
                "-" +
                intermediateValue6.slice(12, 16) +
                "-" +
                intermediateValue6.slice(16, 20) +
                "-" +
                intermediateValue6.slice(20);
            } else {
              intermediateResult6 = intermediateValue6;
            }
          }
          if (Object.keys(intermediateErrorMap6).length > 0) {
            errorMap[`$.refreshToken`].errors.push(intermediateErrorMap6);
          } else {
            hasAnyOfMatch4 = true;
            delete errorMap[`$.refreshToken`];
            result["refreshToken"] = intermediateResult6;
          }
        }
        if (!hasAnyOfMatch4) {
          /** @type {ValidatorErrorMap} */
          const intermediateErrorMap6 = {};
          /** @type {any} */
          let intermediateResult6 = undefined;
          /** @type {any} */
          let intermediateValue6 = value["refreshToken"];

          if (intermediateValue6 === null || intermediateValue6 === undefined) {
            intermediateErrorMap6[`$`] = {
              key: "validator.undefined",
            };
          } else {
            const refResult6 =
              validateQueryResultStoreSessionStoreToken(intermediateValue6);

            if (refResult6.error) {
              for (const errorKey of Object.keys(refResult6.error)) {
                intermediateErrorMap6[`$${errorKey.substring(1)}`] =
                  refResult6.error[errorKey];
              }
            }
            intermediateResult6 = refResult6.value;
          }
          if (Object.keys(intermediateErrorMap6).length > 0) {
            errorMap[`$.refreshToken`].errors.push(intermediateErrorMap6);
          } else {
            hasAnyOfMatch4 = true;
            delete errorMap[`$.refreshToken`];
            result["refreshToken"] = intermediateResult6;
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
        const refResult7 = validateQueryResultStoreSessionStoreToken(
          value["accessToken"],
        );

        if (refResult7.error) {
          for (const errorKey of Object.keys(refResult7.error)) {
            errorMap[`$.accessToken${errorKey.substring(1)}`] =
              refResult7.error[errorKey];
          }
        }
        result["accessToken"] = refResult7.value;
      }
    }
  }
  if (Object.keys(errorMap).length > 0) {
    return { error: errorMap };
  }
  return { value: result };
}
