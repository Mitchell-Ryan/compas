// Generated by @compas/code-gen
/* eslint-disable no-unused-vars */

import {
  anonymousValidator1833756126,
  anonymousValidator1885876481,
  anonymousValidator328829180,
} from "../common/anonymous-validators.js";
import { AppError, isNil } from "@compas/stdlib";
/**
 * @template T
 * @typedef {import("@compas/stdlib").Either<T, AppError>} Either
 */
/**
 * @param {undefined|any|import("../common/types").CliCommandDefinitionInput} value
 * @param {string|undefined} [propertyPath]
 * @returns {Either<import("../common/types").CliCommandDefinition>}
 */
export function validateCliCommandDefinition(value, propertyPath = "$") {
  const result = anonymousValidator1833756126(value, propertyPath);
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
  /** @type {{ value: import("../common/types").CliCommandDefinition}} */
  return { value: result.value };
}
/**
 * @param {undefined|any|import("../common/types").CliCompletionInput} value
 * @param {string|undefined} [propertyPath]
 * @returns {Either<import("../common/types").CliCompletion>}
 */
export function validateCliCompletion(value, propertyPath = "$") {
  const result = anonymousValidator328829180(value, propertyPath);
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
  /** @type {{ value: import("../common/types").CliCompletion}} */
  return { value: result.value };
}
/**
 * @param {undefined|any|import("../common/types").CliFlagDefinitionInput} value
 * @param {string|undefined} [propertyPath]
 * @returns {Either<import("../common/types").CliFlagDefinition>}
 */
export function validateCliFlagDefinition(value, propertyPath = "$") {
  const result = anonymousValidator1885876481(value, propertyPath);
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
  /** @type {{ value: import("../common/types").CliFlagDefinition}} */
  return { value: result.value };
}
