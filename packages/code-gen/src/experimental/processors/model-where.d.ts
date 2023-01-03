/**
 *
 * @param {import("../generated/common/types").ExperimentalObjectDefinition} model
 * @returns {ModelWhereInformation}
 */
export function modelWhereGetInformation(
  model: import("../generated/common/types").ExperimentalObjectDefinition,
): ModelWhereInformation;
/**
 * Build the {@link ModelWhereInformation} object for each model. This way further
 * generation can just fetch the model from the cache instead of recalculating this.
 *
 * @param {import("../generate").GenerateContext} generateContext
 * @returns {void}
 */
export function modelWhereBuildWhereInformation(
  generateContext: import("../generate").GenerateContext,
): void;
/**
 * Build the 'where' types for all models.
 *
 * @param {import("../generate").GenerateContext} generateContext
 * @returns {void}
 */
export function modelWhereBuildWhereTypes(
  generateContext: import("../generate").GenerateContext,
): void;
export type ModelWhereVariant =
  | "equal"
  | "notEqual"
  | "in"
  | "notIn"
  | "greaterThan"
  | "lowerThan"
  | "like"
  | "iLike"
  | "notLike"
  | "isNull"
  | "isNotNull"
  | "includeNotNull";
export type ModelWhereInformation = {
  fields: {
    modelKey: string;
    whereKey: string;
    variant: ModelWhereVariant;
  }[];
};
//# sourceMappingURL=model-where.d.ts.map
