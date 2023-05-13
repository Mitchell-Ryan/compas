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
 * This function is tested indirectly by all its users.
 *
 * @param {import("../generated/common/types.js").StructureTypeDefinition|undefined} typeToTraverse
 * @param {(
 *   type: import("../generated/common/types").StructureTypeDefinition,
 *   callback: (
 *   type: import("../generated/common/types").StructureTypeDefinition,
 * ) => import("../generated/common/types").StructureTypeDefinition|void,
 * ) => import("../generated/common/types.js").StructureTypeDefinition|void} callback
 * @param {{
 *   isInitialType: boolean,
 *   assignResult?: boolean,
 *   beforeTraversal?: (
 *   type: import("../generated/common/types.js").StructureTypeDefinition,
 *   ) => void,
 *   afterTraversal?: (
 *   type: import("../generated/common/types").StructureTypeDefinition,
 *   ) => void,
 * }} options
 */
export function typeDefinitionTraverse(
  typeToTraverse:
    | import("../generated/common/types.js").StructureTypeDefinition
    | undefined,
  callback: (
    type: import("../generated/common/types").StructureTypeDefinition,
    callback: (
      type: import("../generated/common/types").StructureTypeDefinition,
    ) => import("../generated/common/types").StructureTypeDefinition | void,
  ) => import("../generated/common/types.js").StructureTypeDefinition | void,
  options: {
    isInitialType: boolean;
    assignResult?: boolean | undefined;
    beforeTraversal?:
      | ((
          type: import("../generated/common/types.js").StructureTypeDefinition,
        ) => void)
      | undefined;
    afterTraversal?:
      | ((
          type: import("../generated/common/types").StructureTypeDefinition,
        ) => void)
      | undefined;
  },
): void;
/**
 * A collection of all traversal paths per type.
 *
 * There are two traversal methods possible;
 * - single: the provided key directly points to a typeDefinition
 * - many: the provided key points to an array or object. The values of the array or
 * object are all typeDefiniton.
 *
 * @type {Record<
 *   import("../generated/common/types.js").StructureTypeDefinition["type"],
 *   {
 *     key: string,
 *     amount: "single" | "many"
 *   }[]>}
 */
export const typeDefinitionTraversePaths: Record<
  import("../generated/common/types.js").StructureTypeDefinition["type"],
  {
    key: string;
    amount: "single" | "many";
  }[]
>;
//# sourceMappingURL=type-definition-traverse.d.ts.map
