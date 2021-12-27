// Generated by @compas/code-gen
/* eslint-disable no-unused-vars */

import { isNil } from "@compas/stdlib";

/**
 * @typedef {{
 *   propertyPath: string,
 *   key: string,
 *   info: any,
 * }} InternalError
 */

/**
 * @template T
 * @typedef {import("@compas/stdlib").EitherN<T, InternalError>} EitherN
 */

const objectKeys1833756126 = new Set([
  "name",
  "shortDescription",
  "longDescription",
  "modifiers",
  "subCommands",
  "flags",
]);
const objectKeys423569622 = new Set(["isDynamic", "isCosmetic"]);
const objectKeys1885876481 = new Set([
  "name",
  "rawName",
  "description",
  "modifiers",
  "valueSpecification",
]);
const objectKeys334628214 = new Set(["isRepeatable", "isRequired"]);
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<string>}
 */
export function anonymousValidator186795873(value, propertyPath) {
  if (isNil(value)) {
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.string.undefined",
          info: {},
        },
      ],
    };
  }
  if (typeof value !== "string") {
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.string.type",
          info: {},
        },
      ],
    };
  }
  if (value.length < 1) {
    const min = 1;
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.string.min",
          info: { min },
        },
      ],
    };
  }
  return { value };
}
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<string>}
 */
export function anonymousValidator1987407853(value, propertyPath) {
  if (isNil(value)) {
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.string.undefined",
          info: {},
        },
      ],
    };
  }
  if (typeof value !== "string") {
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.string.type",
          info: {},
        },
      ],
    };
  }
  if (value.length < 1) {
    const min = 1;
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.string.min",
          info: { min },
        },
      ],
    };
  }
  if (!/^[^\n]+$/g.test(value)) {
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.string.pattern",
          info: {},
        },
      ],
    };
  }
  return { value };
}
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<undefined|string>}
 */
export function anonymousValidator1443576836(value, propertyPath) {
  if (isNil(value)) {
    return { value: undefined };
  }
  if (typeof value !== "string") {
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.string.type",
          info: {},
        },
      ],
    };
  }
  if (value.length === 0) {
    return {
      value: undefined,
    };
  }
  if (value.length < 1) {
    const min = 1;
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.string.min",
          info: { min },
        },
      ],
    };
  }
  return { value };
}
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<boolean>}
 */
export function anonymousValidator1174857441(value, propertyPath) {
  if (isNil(value)) {
    return { value: false };
  }
  if (typeof value !== "boolean") {
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.boolean.type",
          info: {},
        },
      ],
    };
  }
  return { value };
}
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<{"isDynamic": boolean, "isCosmetic": boolean, }>}
 */
export function anonymousValidator423569622(value, propertyPath) {
  if (isNil(value)) {
    return { value: { isDynamic: false, isCosmetic: false } };
  }
  if (typeof value !== "object") {
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.object.type",
          info: {},
        },
      ],
    };
  }
  const result = Object.create(null);
  const errors = [];
  for (const key of Object.keys(value)) {
    if (!objectKeys423569622.has(key)) {
      /** @type {{ errors: InternalError[] }} */
      return {
        errors: [
          {
            propertyPath,
            key: "validator.object.strict",
            info: { extraKey: key },
          },
        ],
      };
    }
  }
  /**
   * @type {[string, (value: *, propertyPath: string) => EitherN<*>][]}
   */
  const validatorPairs = [
    ["isDynamic", anonymousValidator1174857441],
    ["isCosmetic", anonymousValidator1174857441],
  ];
  for (const [key, validator] of validatorPairs) {
    const validatorResult = validator(value[key], `${propertyPath}.${key}`);
    if (validatorResult.errors) {
      errors.push(...validatorResult.errors);
    } else {
      result[key] = validatorResult.value;
    }
  }
  if (errors.length > 0) {
    return { errors };
  }
  return { value: result };
}
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<(import("./types").CliCommandDefinition)[]>}
 */
export function anonymousValidator1489856765(value, propertyPath) {
  if (isNil(value)) {
    return { value: [] };
  }
  if (!Array.isArray(value)) {
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.array.type",
          info: {},
        },
      ],
    };
  }
  const result = Array.from({ length: value.length });
  const errors = [];
  for (let i = 0; i < value.length; ++i) {
    const arrVar = anonymousValidator1833756126(
      value[i],
      `${propertyPath}[${i}]`,
    );
    if (arrVar.errors) {
      errors.push(...arrVar.errors);
    } else {
      result[i] = arrVar.value;
    }
  }
  if (errors.length > 0) {
    /** @type {{ errors: InternalError[] }} */
    return { errors };
  }
  return { value: result };
}
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<string>}
 */
export function anonymousValidator918642030(value, propertyPath) {
  if (isNil(value)) {
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.string.undefined",
          info: {},
        },
      ],
    };
  }
  if (typeof value !== "string") {
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.string.type",
          info: {},
        },
      ],
    };
  }
  if (value.length < 1) {
    const min = 1;
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.string.min",
          info: { min },
        },
      ],
    };
  }
  value = value.toLowerCase();
  if (!/^--\w/g.test(value)) {
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.string.pattern",
          info: {},
        },
      ],
    };
  }
  return { value };
}
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<undefined|string>}
 */
export function anonymousValidator287762602(value, propertyPath) {
  if (isNil(value)) {
    return { value: undefined };
  }
  if (typeof value !== "string") {
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.string.type",
          info: {},
        },
      ],
    };
  }
  if (value.length === 0) {
    return {
      value: undefined,
    };
  }
  if (value.length < 1) {
    const min = 1;
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.string.min",
          info: { min },
        },
      ],
    };
  }
  if (!/^[^\n]+$/g.test(value)) {
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.string.pattern",
          info: {},
        },
      ],
    };
  }
  return { value };
}
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<{"isRepeatable": boolean, "isRequired": boolean, }>}
 */
export function anonymousValidator334628214(value, propertyPath) {
  if (isNil(value)) {
    return { value: { isRepeatable: false, isRequired: false } };
  }
  if (typeof value !== "object") {
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.object.type",
          info: {},
        },
      ],
    };
  }
  const result = Object.create(null);
  const errors = [];
  for (const key of Object.keys(value)) {
    if (!objectKeys334628214.has(key)) {
      /** @type {{ errors: InternalError[] }} */
      return {
        errors: [
          {
            propertyPath,
            key: "validator.object.strict",
            info: { extraKey: key },
          },
        ],
      };
    }
  }
  /**
   * @type {[string, (value: *, propertyPath: string) => EitherN<*>][]}
   */
  const validatorPairs = [
    ["isRepeatable", anonymousValidator1174857441],
    ["isRequired", anonymousValidator1174857441],
  ];
  for (const [key, validator] of validatorPairs) {
    const validatorResult = validator(value[key], `${propertyPath}.${key}`);
    if (validatorResult.errors) {
      errors.push(...validatorResult.errors);
    } else {
      result[key] = validatorResult.value;
    }
  }
  if (errors.length > 0) {
    return { errors };
  }
  return { value: result };
}
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<"boolean"|"number"|"string"|"booleanOrString">}
 */
export function anonymousValidator1672956483(value, propertyPath) {
  if (isNil(value)) {
    return { value: "boolean" };
  }
  if (typeof value !== "string") {
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.string.type",
          info: {},
        },
      ],
    };
  }
  if (value.length === 0) {
    return { value: "boolean" };
  }
  if (value.length < 1) {
    const min = 1;
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.string.min",
          info: { min },
        },
      ],
    };
  }
  if (
    value !== "boolean" &&
    value !== "number" &&
    value !== "string" &&
    value !== "booleanOrString"
  ) {
    const oneOf = ["boolean", "number", "string", "booleanOrString"];
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.string.oneOf",
          info: { oneOf },
        },
      ],
    };
  }
  return { value };
}
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<{"name": string, "rawName": string, "description"?: undefined|string, "modifiers": {"isRepeatable": boolean, "isRequired": boolean, }, "valueSpecification": "boolean"|"number"|"string"|"booleanOrString", }>}
 */
export function anonymousValidator1885876481(value, propertyPath) {
  if (isNil(value)) {
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.object.undefined",
          info: {},
        },
      ],
    };
  }
  if (typeof value !== "object") {
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.object.type",
          info: {},
        },
      ],
    };
  }
  const result = Object.create(null);
  const errors = [];
  for (const key of Object.keys(value)) {
    if (!objectKeys1885876481.has(key)) {
      /** @type {{ errors: InternalError[] }} */
      return {
        errors: [
          {
            propertyPath,
            key: "validator.object.strict",
            info: { extraKey: key },
          },
        ],
      };
    }
  }
  /**
   * @type {[string, (value: *, propertyPath: string) => EitherN<*>][]}
   */
  const validatorPairs = [
    ["name", anonymousValidator186795873],
    ["rawName", anonymousValidator918642030],
    ["description", anonymousValidator287762602],
    ["modifiers", anonymousValidator334628214],
    ["valueSpecification", anonymousValidator1672956483],
  ];
  for (const [key, validator] of validatorPairs) {
    const validatorResult = validator(value[key], `${propertyPath}.${key}`);
    if (validatorResult.errors) {
      errors.push(...validatorResult.errors);
    } else {
      result[key] = validatorResult.value;
    }
  }
  if (errors.length > 0) {
    return { errors };
  }
  return { value: result };
}
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<(import("./types").CliFlagDefinition)[]>}
 */
export function anonymousValidator1259325376(value, propertyPath) {
  if (isNil(value)) {
    return { value: [] };
  }
  if (!Array.isArray(value)) {
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.array.type",
          info: {},
        },
      ],
    };
  }
  const result = Array.from({ length: value.length });
  const errors = [];
  for (let i = 0; i < value.length; ++i) {
    const arrVar = anonymousValidator1885876481(
      value[i],
      `${propertyPath}[${i}]`,
    );
    if (arrVar.errors) {
      errors.push(...arrVar.errors);
    } else {
      result[i] = arrVar.value;
    }
  }
  if (errors.length > 0) {
    /** @type {{ errors: InternalError[] }} */
    return { errors };
  }
  return { value: result };
}
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<{"name": string, "shortDescription": string, "longDescription"?: undefined|string, "modifiers": {"isDynamic": boolean, "isCosmetic": boolean, }, "subCommands": (import("./types").CliCommandDefinition)[], "flags": (import("./types").CliFlagDefinition)[], }>}
 */
export function anonymousValidator1833756126(value, propertyPath) {
  if (isNil(value)) {
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.object.undefined",
          info: {},
        },
      ],
    };
  }
  if (typeof value !== "object") {
    /** @type {{ errors: InternalError[] }} */
    return {
      errors: [
        {
          propertyPath,
          key: "validator.object.type",
          info: {},
        },
      ],
    };
  }
  const result = Object.create(null);
  const errors = [];
  for (const key of Object.keys(value)) {
    if (!objectKeys1833756126.has(key)) {
      /** @type {{ errors: InternalError[] }} */
      return {
        errors: [
          {
            propertyPath,
            key: "validator.object.strict",
            info: { extraKey: key },
          },
        ],
      };
    }
  }
  /**
   * @type {[string, (value: *, propertyPath: string) => EitherN<*>][]}
   */
  const validatorPairs = [
    ["name", anonymousValidator186795873],
    ["shortDescription", anonymousValidator1987407853],
    ["longDescription", anonymousValidator1443576836],
    ["modifiers", anonymousValidator423569622],
    ["subCommands", anonymousValidator1489856765],
    ["flags", anonymousValidator1259325376],
  ];
  for (const [key, validator] of validatorPairs) {
    const validatorResult = validator(value[key], `${propertyPath}.${key}`);
    if (validatorResult.errors) {
      errors.push(...validatorResult.errors);
    } else {
      result[key] = validatorResult.value;
    }
  }
  if (errors.length > 0) {
    return { errors };
  }
  return { value: result };
}