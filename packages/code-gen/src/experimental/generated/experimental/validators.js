// Generated by @compas/code-gen
/* eslint-disable no-unused-vars */

import {
  anonymousValidator1125369163,
  anonymousValidator1256944988,
  anonymousValidator1671053633,
  anonymousValidator1717694293,
  anonymousValidator1855474324,
  anonymousValidator1868684730,
  anonymousValidator2043713750,
  anonymousValidator527504798,
  anonymousValidator55094131,
} from "../common/anonymous-validators.js";
import { AppError, isNil } from "@compas/stdlib";
/**
 * @template T
 * @typedef {import("@compas/stdlib").Either<T, AppError>} Either
 */
/**
 * @param {undefined|any|import("../common/types").ExperimentalBooleanDefinitionInput} value
 * @param {string|undefined} [propertyPath]
 * @returns {Either<import("../common/types").ExperimentalBooleanDefinition>}
 */
export function validateExperimentalBooleanDefinition(
  value,
  propertyPath = "$",
) {
  const result = anonymousValidator55094131(value, propertyPath);
  if (result.errors) {
    const info = {};
    for (const err of result.errors) {
      if (isNil(info[err.propertyPath])) {
        info[err.propertyPath] = err;
      } else if (Array.isArray(info[err.propertyPath])) {
        info[err.propertyPath].push(err);
      } else {
        info[err.propertyPath] = [info[err.propertyPath], err];
      }
    }
    /** @type {{ error: AppError }} */
    return {
      error: AppError.validationError("validator.error", info),
    };
  }
  /** @type {{ value: import("../common/types").ExperimentalBooleanDefinition}} */
  return { value: result.value };
}
/**
 * @param {undefined|any|import("../common/types").ExperimentalGenerateOptionsInput} value
 * @param {string|undefined} [propertyPath]
 * @returns {Either<import("../common/types").ExperimentalGenerateOptions>}
 */
export function validateExperimentalGenerateOptions(value, propertyPath = "$") {
  const result = anonymousValidator1671053633(value, propertyPath);
  if (result.errors) {
    const info = {};
    for (const err of result.errors) {
      if (isNil(info[err.propertyPath])) {
        info[err.propertyPath] = err;
      } else if (Array.isArray(info[err.propertyPath])) {
        info[err.propertyPath].push(err);
      } else {
        info[err.propertyPath] = [info[err.propertyPath], err];
      }
    }
    /** @type {{ error: AppError }} */
    return {
      error: AppError.validationError("validator.error", info),
    };
  }
  /** @type {{ value: import("../common/types").ExperimentalGenerateOptions}} */
  return { value: result.value };
}
/**
 * @param {undefined|any|import("../common/types").ExperimentalNamePartInput} value
 * @param {string|undefined} [propertyPath]
 * @returns {Either<import("../common/types").ExperimentalNamePart>}
 */
export function validateExperimentalNamePart(value, propertyPath = "$") {
  const result = anonymousValidator1868684730(value, propertyPath);
  if (result.errors) {
    const info = {};
    for (const err of result.errors) {
      if (isNil(info[err.propertyPath])) {
        info[err.propertyPath] = err;
      } else if (Array.isArray(info[err.propertyPath])) {
        info[err.propertyPath].push(err);
      } else {
        info[err.propertyPath] = [info[err.propertyPath], err];
      }
    }
    /** @type {{ error: AppError }} */
    return {
      error: AppError.validationError("validator.error", info),
    };
  }
  /** @type {{ value: import("../common/types").ExperimentalNamePart}} */
  return { value: result.value };
}
/**
 * @param {undefined|any|import("../common/types").ExperimentalNamedTypeDefinitionInput} value
 * @param {string|undefined} [propertyPath]
 * @returns {Either<import("../common/types").ExperimentalNamedTypeDefinition>}
 */
export function validateExperimentalNamedTypeDefinition(
  value,
  propertyPath = "$",
) {
  const result = anonymousValidator527504798(value, propertyPath);
  if (result.errors) {
    const info = {};
    for (const err of result.errors) {
      if (isNil(info[err.propertyPath])) {
        info[err.propertyPath] = err;
      } else if (Array.isArray(info[err.propertyPath])) {
        info[err.propertyPath].push(err);
      } else {
        info[err.propertyPath] = [info[err.propertyPath], err];
      }
    }
    /** @type {{ error: AppError }} */
    return {
      error: AppError.validationError("validator.error", info),
    };
  }
  /** @type {{ value: import("../common/types").ExperimentalNamedTypeDefinition}} */
  return { value: result.value };
}
/**
 * @param {undefined|any|import("../common/types").ExperimentalNumberDefinitionInput} value
 * @param {string|undefined} [propertyPath]
 * @returns {Either<import("../common/types").ExperimentalNumberDefinition>}
 */
export function validateExperimentalNumberDefinition(
  value,
  propertyPath = "$",
) {
  const result = anonymousValidator1256944988(value, propertyPath);
  if (result.errors) {
    const info = {};
    for (const err of result.errors) {
      if (isNil(info[err.propertyPath])) {
        info[err.propertyPath] = err;
      } else if (Array.isArray(info[err.propertyPath])) {
        info[err.propertyPath].push(err);
      } else {
        info[err.propertyPath] = [info[err.propertyPath], err];
      }
    }
    /** @type {{ error: AppError }} */
    return {
      error: AppError.validationError("validator.error", info),
    };
  }
  /** @type {{ value: import("../common/types").ExperimentalNumberDefinition}} */
  return { value: result.value };
}
/**
 * @param {undefined|any|import("../common/types").ExperimentalReferenceDefinitionInput} value
 * @param {string|undefined} [propertyPath]
 * @returns {Either<import("../common/types").ExperimentalReferenceDefinition>}
 */
export function validateExperimentalReferenceDefinition(
  value,
  propertyPath = "$",
) {
  const result = anonymousValidator2043713750(value, propertyPath);
  if (result.errors) {
    const info = {};
    for (const err of result.errors) {
      if (isNil(info[err.propertyPath])) {
        info[err.propertyPath] = err;
      } else if (Array.isArray(info[err.propertyPath])) {
        info[err.propertyPath].push(err);
      } else {
        info[err.propertyPath] = [info[err.propertyPath], err];
      }
    }
    /** @type {{ error: AppError }} */
    return {
      error: AppError.validationError("validator.error", info),
    };
  }
  /** @type {{ value: import("../common/types").ExperimentalReferenceDefinition}} */
  return { value: result.value };
}
/**
 * @param {undefined|any|import("../common/types").ExperimentalStringDefinitionInput} value
 * @param {string|undefined} [propertyPath]
 * @returns {Either<import("../common/types").ExperimentalStringDefinition>}
 */
export function validateExperimentalStringDefinition(
  value,
  propertyPath = "$",
) {
  const result = anonymousValidator1855474324(value, propertyPath);
  if (result.errors) {
    const info = {};
    for (const err of result.errors) {
      if (isNil(info[err.propertyPath])) {
        info[err.propertyPath] = err;
      } else if (Array.isArray(info[err.propertyPath])) {
        info[err.propertyPath].push(err);
      } else {
        info[err.propertyPath] = [info[err.propertyPath], err];
      }
    }
    /** @type {{ error: AppError }} */
    return {
      error: AppError.validationError("validator.error", info),
    };
  }
  /** @type {{ value: import("../common/types").ExperimentalStringDefinition}} */
  return { value: result.value };
}
/**
 * @param {undefined|any|import("../common/types").ExperimentalStructureInput} value
 * @param {string|undefined} [propertyPath]
 * @returns {Either<import("../common/types").ExperimentalStructure>}
 */
export function validateExperimentalStructure(value, propertyPath = "$") {
  const result = anonymousValidator1125369163(value, propertyPath);
  if (result.errors) {
    const info = {};
    for (const err of result.errors) {
      if (isNil(info[err.propertyPath])) {
        info[err.propertyPath] = err;
      } else if (Array.isArray(info[err.propertyPath])) {
        info[err.propertyPath].push(err);
      } else {
        info[err.propertyPath] = [info[err.propertyPath], err];
      }
    }
    /** @type {{ error: AppError }} */
    return {
      error: AppError.validationError("validator.error", info),
    };
  }
  /** @type {{ value: import("../common/types").ExperimentalStructure}} */
  return { value: result.value };
}
/**
 * @param {undefined|any|import("../common/types").ExperimentalTypeDefinitionInput} value
 * @param {string|undefined} [propertyPath]
 * @returns {Either<import("../common/types").ExperimentalTypeDefinition>}
 */
export function validateExperimentalTypeDefinition(value, propertyPath = "$") {
  const result = anonymousValidator1717694293(value, propertyPath);
  if (result.errors) {
    const info = {};
    for (const err of result.errors) {
      if (isNil(info[err.propertyPath])) {
        info[err.propertyPath] = err;
      } else if (Array.isArray(info[err.propertyPath])) {
        info[err.propertyPath].push(err);
      } else {
        info[err.propertyPath] = [info[err.propertyPath], err];
      }
    }
    /** @type {{ error: AppError }} */
    return {
      error: AppError.validationError("validator.error", info),
    };
  }
  /** @type {{ value: import("../common/types").ExperimentalTypeDefinition}} */
  return { value: result.value };
}
