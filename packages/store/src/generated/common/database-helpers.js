// Generated by @compas/code-gen

import { AppError } from "@compas/stdlib";

/**
 * Wrap a queryPart & validator in something that can either be used directly, or can be chained.
 *
 * @template {function} T
 *
 * @param {import("@compas/store").QueryPart<any>} queryPart
 * @param {T} validator
 * @param {{ hasCustomReturning: boolean }} options
 * @returns {import("@compas/store").WrappedQueryPart<NonNullable<ReturnType<T>["value"]>>}
 */
export function wrapQueryPart(queryPart, validator, options) {
  return {
    queryPart,
    then: () => {
      throw AppError.serverError({
        message:
          "Awaited a wrapped query part directly. Please use '.exec' or '.execRaw'.",
      });
    },
    exec: async (sql) => {
      if (options.hasCustomReturning) {
        throw AppError.serverError({
          message:
            "A custom value for the returned columns is used. This can't be used with '.exec', because it validates the full model. Please use '.execRaw' instead.",
        });
      }

      const queryResult = await queryPart.exec(sql);
      const validatedResult = Array.from({ length: queryResult.length });

      for (let i = 0; i < queryResult.length; ++i) {
        const { error, value } = validator(queryResult[i]);

        if (error) {
          throw AppError.serverError({
            message:
              "Database result did not pass the validators. When 'select' is used, you may want to use '.execRaw(sql)' instead of '.exec(sql)'.",
            validator: validator.name,
            error,
            databaseValue: queryResult[i],
          });
        }

        validatedResult[i] = value;
      }

      return validatedResult;
    },
    execRaw: async (sql) => await queryPart.exec(sql),
  };
}
