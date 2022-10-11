/**
 * Traverse the type recursively
 *
 * Order of operations when an object definition is provided
 * - `options.isInitialType` should be set to true
 * - `callback` is called with the object definition and a new nested callback
 * - If the nested callback is called, the traversal kicks in
 * - `options.beforeTraversal` is called when provided
 * - For each traversal path of the provided type, the callback is called with a nested
 * callback
 * - When all traversal paths are exhausted / the nested callback is not called again.
 * `options.afterTraversal` is called when provided.
 *
 * @param {import("../generated/common/types").ExperimentalTypeDefinition|undefined} type
 * @param {(
 *   type: import("../generated/common/types").ExperimentalTypeDefinition,
 *   callback: (
 *   type: import("../generated/common/types").ExperimentalTypeDefinition,
 * ) => import("../generated/common/types").ExperimentalTypeDefinition|void,
 * ) => import("../generated/common/types").ExperimentalTypeDefinition|void} callback
 * @param {{
 *   isInitialType: boolean,
 *   assignResult?: boolean,
 *   beforeTraversal?: (
 *   type: import("../generated/common/types").ExperimentalTypeDefinition,
 *   ) => void,
 *   afterTraversal?: (
 *   type: import("../generated/common/types").ExperimentalTypeDefinition,
 *   ) => void,
 * }} options
 */
export function typeDefinitionTraverse(
  type:
    | import("../generated/common/types").ExperimentalTypeDefinition
    | undefined,
  callback: (
    type: import("../generated/common/types").ExperimentalTypeDefinition,
    callback: (
      type: import("../generated/common/types").ExperimentalTypeDefinition,
    ) => import("../generated/common/types").ExperimentalTypeDefinition | void,
  ) => import("../generated/common/types").ExperimentalTypeDefinition | void,
  options: {
    isInitialType: boolean;
    assignResult?: boolean | undefined;
    beforeTraversal?:
      | ((
          type: import("../generated/common/types").ExperimentalTypeDefinition,
        ) => void)
      | undefined;
    afterTraversal?:
      | ((
          type: import("../generated/common/types").ExperimentalTypeDefinition,
        ) => void)
      | undefined;
  },
): void;
/**
 * A collection of all traversal paths per type
 *
 * @type {Record<
 *   import("../generated/common/types").ExperimentalTypeDefinition["type"],
 *   {
 *     key: string,
 *     amount: "single" | "many"
 *   }[]>}
 */
export const typeDefinitionTraversePaths: Record<
  import("../generated/common/types").ExperimentalTypeDefinition["type"],
  {
    key: string;
    amount: "single" | "many";
  }[]
>;
//# sourceMappingURL=type-definition-traverse.d.ts.map
