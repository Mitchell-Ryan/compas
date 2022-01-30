// Generated by @compas/code-gen
/* eslint-disable no-unused-vars */

import { AppError, isNil, isPlainObject, isStaging } from "@compas/stdlib";
import {
  generatedQueryBuilderHelper,
  generatedWhereBuilderHelper,
  isQueryPart,
  query,
} from "@compas/store";
import {
  validateStoreFileGroupOrderBy,
  validateStoreFileGroupOrderBySpec,
  validateStoreFileGroupQueryBuilder,
  validateStoreFileGroupWhere,
} from "../store/validators.js";
import {
  fileQueryBuilderSpec,
  fileWhere,
  fileWhereSpec,
  transformFile,
} from "./file.js";

const fileGroupFieldSet = new Set([
  "name",
  "order",
  "meta",
  "id",
  "file",
  "parent",
  "createdAt",
  "updatedAt",
  "deletedAt",
]);
/**
 * Get all fields for fileGroup
 *
 * @param {string} [tableName="fg."]
 * @param {{ excludePrimaryKey?: boolean }} [options={}]
 * @returns {QueryPart}
 */
export function fileGroupFields(tableName = "fg.", options = {}) {
  if (tableName.length > 0 && !tableName.endsWith(".")) {
    tableName = `${tableName}.`;
  }
  if (options.excludePrimaryKey) {
    return query([
      `${tableName}"order", ${tableName}"file", ${tableName}"parent", ${tableName}"name", ${tableName}"meta", ${tableName}"createdAt", ${tableName}"updatedAt", ${tableName}"deletedAt"`,
    ]);
  }
  return query([
    `${tableName}"id", ${tableName}"order", ${tableName}"file", ${tableName}"parent", ${tableName}"name", ${tableName}"meta", ${tableName}"createdAt", ${tableName}"updatedAt", ${tableName}"deletedAt"`,
  ]);
}
/** @type {any} */
export const fileGroupWhereSpec = {
  fieldSpecification: [
    {
      tableKey: "id",
      keyType: "uuid",
      matchers: [
        { matcherKey: "id", matcherType: "equal" },
        { matcherKey: "idNotEqual", matcherType: "notEqual" },
        { matcherKey: "idIn", matcherType: "in" },
        { matcherKey: "idNotIn", matcherType: "notIn" },
      ],
    },
    {
      tableKey: "order",
      keyType: "int",
      matchers: [
        { matcherKey: "order", matcherType: "equal" },
        { matcherKey: "orderNotEqual", matcherType: "notEqual" },
        { matcherKey: "orderIn", matcherType: "in" },
        { matcherKey: "orderNotIn", matcherType: "notIn" },
        { matcherKey: "orderGreaterThan", matcherType: "greaterThan" },
        { matcherKey: "orderLowerThan", matcherType: "lowerThan" },
        { matcherKey: "orderIsNull", matcherType: "isNull" },
        { matcherKey: "orderIsNotNull", matcherType: "isNotNull" },
      ],
    },
    {
      tableKey: "file",
      keyType: "uuid",
      matchers: [
        { matcherKey: "file", matcherType: "equal" },
        { matcherKey: "fileNotEqual", matcherType: "notEqual" },
        { matcherKey: "fileIn", matcherType: "in" },
        { matcherKey: "fileNotIn", matcherType: "notIn" },
        { matcherKey: "fileIsNull", matcherType: "isNull" },
        { matcherKey: "fileIsNotNull", matcherType: "isNotNull" },
        {
          matcherKey: "viaFile",
          matcherType: "via",
          relation: {
            entityName: "file",
            shortName: "f",
            entityKey: "id",
            referencedKey: "file",
            where: () => fileWhereSpec,
          },
        },
      ],
    },
    {
      tableKey: "parent",
      keyType: "uuid",
      matchers: [
        { matcherKey: "parent", matcherType: "equal" },
        { matcherKey: "parentNotEqual", matcherType: "notEqual" },
        { matcherKey: "parentIn", matcherType: "in" },
        { matcherKey: "parentNotIn", matcherType: "notIn" },
        { matcherKey: "parentIsNull", matcherType: "isNull" },
        { matcherKey: "parentIsNotNull", matcherType: "isNotNull" },
        {
          matcherKey: "viaParent",
          matcherType: "via",
          relation: {
            entityName: "fileGroup",
            shortName: "fg2",
            entityKey: "id",
            referencedKey: "parent",
            where: () => fileGroupWhereSpec,
          },
        },
      ],
    },
    {
      tableKey: "createdAt",
      keyType: "timestamptz",
      matchers: [
        { matcherKey: "createdAt", matcherType: "equal" },
        { matcherKey: "createdAtNotEqual", matcherType: "notEqual" },
        { matcherKey: "createdAtIn", matcherType: "in" },
        { matcherKey: "createdAtNotIn", matcherType: "notIn" },
        { matcherKey: "createdAtGreaterThan", matcherType: "greaterThan" },
        { matcherKey: "createdAtLowerThan", matcherType: "lowerThan" },
        { matcherKey: "createdAtIsNull", matcherType: "isNull" },
        { matcherKey: "createdAtIsNotNull", matcherType: "isNotNull" },
      ],
    },
    {
      tableKey: "updatedAt",
      keyType: "timestamptz",
      matchers: [
        { matcherKey: "updatedAt", matcherType: "equal" },
        { matcherKey: "updatedAtNotEqual", matcherType: "notEqual" },
        { matcherKey: "updatedAtIn", matcherType: "in" },
        { matcherKey: "updatedAtNotIn", matcherType: "notIn" },
        { matcherKey: "updatedAtGreaterThan", matcherType: "greaterThan" },
        { matcherKey: "updatedAtLowerThan", matcherType: "lowerThan" },
        { matcherKey: "updatedAtIsNull", matcherType: "isNull" },
        { matcherKey: "updatedAtIsNotNull", matcherType: "isNotNull" },
      ],
    },
    {
      tableKey: "deletedAt",
      keyType: "timestamptz",
      matchers: [
        { matcherKey: "deletedAt", matcherType: "equal" },
        { matcherKey: "deletedAtNotEqual", matcherType: "notEqual" },
        { matcherKey: "deletedAtIn", matcherType: "in" },
        { matcherKey: "deletedAtNotIn", matcherType: "notIn" },
        { matcherKey: "deletedAtGreaterThan", matcherType: "greaterThan" },
        { matcherKey: "deletedAtLowerThan", matcherType: "lowerThan" },
        {
          matcherKey: "deletedAtIncludeNotNull",
          matcherType: "includeNotNull",
        },
      ],
    },
    {
      tableKey: "children",
      keyType: "undefined",
      matchers: [
        {
          matcherKey: "viaChildren",
          matcherType: "via",
          relation: {
            entityName: "fileGroup",
            shortName: "fg2",
            entityKey: "parent",
            referencedKey: "id",
            where: () => fileGroupWhereSpec,
          },
        },
        {
          matcherKey: "childrenNotExists",
          matcherType: "notExists",
          relation: {
            entityName: "fileGroup",
            shortName: "fg2",
            entityKey: "parent",
            referencedKey: "id",
            where: () => fileGroupWhereSpec,
          },
        },
      ],
    },
  ],
};
/**
 * Build 'WHERE ' part for fileGroup
 *
 * @param {StoreFileGroupWhere} [where={}]
 * @param {string} [tableName="fg."]
 * @param {{ skipValidator?: boolean|undefined }} [options={}]
 * @returns {QueryPart}
 */
export function fileGroupWhere(where = {}, tableName = "fg.", options = {}) {
  if (tableName.length > 0 && !tableName.endsWith(".")) {
    tableName = `${tableName}.`;
  }
  if (!options.skipValidator) {
    const whereValidated = validateStoreFileGroupWhere(
      where,
      "$.fileGroupWhere",
    );
    if (whereValidated.error) {
      throw whereValidated.error;
    }
    where = whereValidated.value;
  }
  return generatedWhereBuilderHelper(fileGroupWhereSpec, where, tableName);
}
/**
 * Build 'ORDER BY ' part for fileGroup
 *
 * @param {StoreFileGroupOrderBy} [orderBy=["createdAt", "updatedAt", "id"]]
 * @param {StoreFileGroupOrderBySpec} [orderBySpec={}]
 * @param {string} [tableName="fg."]
 * @param {{ skipValidator?: boolean|undefined }} [options={}]
 * @returns {QueryPart}
 */
export function fileGroupOrderBy(
  orderBy = ["createdAt", "updatedAt", "id"],
  orderBySpec = {},
  tableName = "fg.",
  options = {},
) {
  if (tableName.length > 0 && !tableName.endsWith(".")) {
    tableName = `${tableName}.`;
  }
  if (!options.skipValidator) {
    const orderByValidated = validateStoreFileGroupOrderBy(
      orderBy,
      "$.StoreFileGroupOrderBy",
    );
    if (orderByValidated.error) {
      throw orderByValidated.error;
    }
    orderBy = orderByValidated.value;
    const orderBySpecValidated = validateStoreFileGroupOrderBySpec(
      orderBySpec,
      "$.StoreFileGroupOrderBySpec",
    );
    if (orderBySpecValidated.error) {
      throw orderBySpecValidated.error;
    }
    orderBySpec = orderBySpecValidated.value;
  }
  if (isQueryPart(orderBy)) {
    return orderBy;
  }
  const strings = [];
  const values = [];
  let i = 0;
  for (const value of orderBy) {
    if (i !== 0) {
      strings.push(", ");
      values.push(undefined);
    }
    i++;
    strings.push(`${tableName}"${value}" `, orderBySpec[value] ?? "ASC");
    values.push(undefined, undefined);
  }
  strings.push("");
  return query(strings, ...values);
}
/**
 * Build 'VALUES ' part for fileGroup
 *
 * @param {StoreFileGroupInsertPartial|StoreFileGroupInsertPartial[]} insert
 * @param {{ includePrimaryKey?: boolean }} [options={}]
 * @returns {QueryPart}
 */
export function fileGroupInsertValues(insert, options = {}) {
  if (!Array.isArray(insert)) {
    insert = [insert];
  }
  const str = [];
  const args = [];
  for (let i = 0; i < insert.length; ++i) {
    const it = insert[i];
    checkFieldsInSet("fileGroup", "insert", fileGroupFieldSet, it);
    str.push("(");
    if (options?.includePrimaryKey) {
      args.push(it.id);
      str.push(", ");
    }
    args.push(it.order ?? Math.floor(Date.now() / 1000000));
    str.push(", ");
    args.push(it.file ?? null);
    str.push(", ");
    args.push(it.parent ?? null);
    str.push(", ");
    args.push(it.name ?? null);
    str.push(", ");
    args.push(JSON.stringify(it.meta ?? {}));
    str.push(", ");
    args.push(it.createdAt ?? new Date());
    str.push(", ");
    args.push(it.updatedAt ?? new Date());
    str.push(", ");
    args.push(it.deletedAt ?? null);
    str.push(", ");
    // Fixup last comma & add undefined arg so strings are concatted correctly
    const lastStrIdx = str.length - 1;
    str[lastStrIdx] = str[lastStrIdx].substring(0, str[lastStrIdx].length - 2);
    args.push(undefined);
    str.push(")");
    args.push(undefined);
    if (i !== insert.length - 1) {
      args.push(undefined);
      str.push(",");
    }
  }
  if (args.length > 100000) {
    throw AppError.serverError({
      message:
        "Insert array has too many values, split up your array in smaller batches and execute 'fileGroupInsert' multiple times.",
    });
  }
  return query(str, ...args);
}
/**
 * Build 'SET ' part for fileGroup
 *
 * @param {StoreFileGroupUpdatePartial} update
 * @returns {QueryPart}
 */
export function fileGroupUpdateSet(update) {
  const strings = [];
  const values = [];
  checkFieldsInSet("fileGroup", "update", fileGroupFieldSet, update);
  if (update.order !== undefined) {
    strings.push(`, "order" = `);
    values.push(update.order ?? Math.floor(Date.now() / 1000000));
  }
  if (update.file !== undefined) {
    strings.push(`, "file" = `);
    values.push(update.file ?? null);
  }
  if (update.parent !== undefined) {
    strings.push(`, "parent" = `);
    values.push(update.parent ?? null);
  }
  if (update.name !== undefined) {
    strings.push(`, "name" = `);
    values.push(update.name ?? null);
  }
  if (update.meta !== undefined) {
    strings.push(`, "meta" = `);
    values.push(JSON.stringify(update.meta ?? {}));
  }
  if (update.createdAt !== undefined) {
    strings.push(`, "createdAt" = `);
    values.push(update.createdAt ?? new Date());
  }
  strings.push(`, "updatedAt" = `);
  values.push(new Date());
  if (update.deletedAt !== undefined) {
    strings.push(`, "deletedAt" = `);
    values.push(update.deletedAt ?? null);
  }
  // Remove the comma suffix
  if (strings.length === 0) {
    throw AppError.validationError("fileGroup.updateSet.emptyUpdateStatement");
  }
  strings[0] = strings[0].substring(2);
  strings.push("");
  return query(strings, ...values);
}
/**
 * @param {string} entity
 * @param {string} subType
 * @param {Set} set
 * @param {*} value
 */
function checkFieldsInSet(entity, subType, set, value) {
  if (isStaging()) {
    for (const key of Object.keys(value)) {
      if (!set.has(key) && value[key] !== undefined) {
        throw new AppError(`query.${entity}.${subType}Fields`, 500, {
          extraKey: key,
          knownKeys: [...set],
        });
      }
    }
  }
}
/**
 * @param {Postgres} sql
 * @param {StoreFileGroupWhere} [where]
 * @returns {Promise<number>}
 */
async function fileGroupCount(sql, where) {
  const [result] = await query`
SELECT COUNT(fg."id") as "countResult"
FROM "fileGroup" fg
WHERE ${fileGroupWhere(where)}
`.exec(sql);
  return Number(result?.countResult ?? "0");
}
/**
 * @param {Postgres} sql
 * @param {StoreFileGroupWhere} [where={}]
 * @returns {Promise<void>}
 */
async function fileGroupDeletePermanent(sql, where = {}) {
  where.deletedAtIncludeNotNull = true;
  return await query`
DELETE FROM "fileGroup" fg
WHERE ${fileGroupWhere(where)}
`.exec(sql);
}
/**
 * @param {Postgres} sql
 * @param {StoreFileGroupInsertPartial|(StoreFileGroupInsertPartial[])} insert
 * @param {{ withPrimaryKey?: boolean }} [options={}]
 * @returns {Promise<StoreFileGroup[]>}
 */
async function fileGroupInsert(sql, insert, options = {}) {
  if (insert === undefined || (Array.isArray(insert) && insert.length === 0)) {
    return [];
  }
  options.withPrimaryKey = options.withPrimaryKey ?? false;
  const result = await query`
INSERT INTO "fileGroup" (${fileGroupFields("", {
    excludePrimaryKey: !options.withPrimaryKey,
  })})
VALUES ${fileGroupInsertValues(insert, {
    includePrimaryKey: options.withPrimaryKey,
  })}
RETURNING ${fileGroupFields("")}
`.exec(sql);
  transformFileGroup(result);
  return result;
}
/**
 * @param {Postgres} sql
 * @param {StoreFileGroupInsertPartial|(StoreFileGroupInsertPartial[])} insert
 * @param {{}} [options={}]
 * @returns {Promise<StoreFileGroup[]>}
 */
async function fileGroupUpsertOnId(sql, insert, options = {}) {
  if (insert === undefined || (Array.isArray(insert) && insert.length === 0)) {
    return [];
  }
  const fieldString = [...fileGroupFieldSet]
    .filter((it) => it !== "id" && it !== "createdAt")
    .map(
      (column) =>
        `"${column}" = COALESCE(EXCLUDED."${column}", "fileGroup"."${column}")`,
    )
    .join(",");
  const result = await query`
INSERT INTO "fileGroup" (${fileGroupFields("", { excludePrimaryKey: false })})
VALUES ${fileGroupInsertValues(insert, { includePrimaryKey: true })}
ON CONFLICT ("id") DO UPDATE SET ${query([fieldString])}
RETURNING ${fileGroupFields("")}
`.exec(sql);
  transformFileGroup(result);
  return result;
}
/**
 * @param {Postgres} sql
 * @param {StoreFileGroupUpdatePartial} update
 * @param {StoreFileGroupWhere} [where={}]
 * @returns {Promise<StoreFileGroup[]>}
 */
async function fileGroupUpdate(sql, update, where = {}) {
  const result = await query`
UPDATE "fileGroup" fg
SET ${fileGroupUpdateSet(update)}
WHERE ${fileGroupWhere(where)}
RETURNING ${fileGroupFields()}
`.exec(sql);
  transformFileGroup(result);
  return result;
}
/**
 * @param {Postgres} sql
 * @param {StoreFileGroupWhere} [where={}]
 * @param {{ skipCascade?: boolean }} [options={}]
 * @returns {Promise<void>}
 */
async function fileGroupDelete(sql, where = {}, options = {}) {
  const result = await query`
UPDATE "fileGroup" fg
SET "deletedAt" = now()
WHERE ${fileGroupWhere(where)}
RETURNING "id"
`.exec(sql);
  if (options.skipCascade || result.length === 0) {
    return;
  }
  const ids = result.map((it) => it.id);
  await Promise.all([fileGroupQueries.fileGroupDelete(sql, { parentIn: ids })]);
}
export const fileGroupQueries = {
  fileGroupCount,
  fileGroupDelete,
  fileGroupInsert,
  fileGroupUpsertOnId,
  fileGroupUpdate,
  fileGroupDeletePermanent,
};
export const fileGroupQueryBuilderSpec = {
  name: "fileGroup",
  shortName: "fg",
  orderBy: fileGroupOrderBy,
  where: fileGroupWhereSpec,
  columns: [
    "name",
    "order",
    "meta",
    "id",
    "file",
    "parent",
    "createdAt",
    "updatedAt",
    "deletedAt",
  ],
  relations: [
    {
      builderKey: "file",
      ownKey: "file",
      referencedKey: "id",
      returnsMany: false,
      entityInformation: () => fileQueryBuilderSpec,
    },
    {
      builderKey: "parent",
      ownKey: "parent",
      referencedKey: "id",
      returnsMany: false,
      entityInformation: () => fileGroupQueryBuilderSpec,
    },
    {
      builderKey: "children",
      ownKey: "id",
      referencedKey: "parent",
      returnsMany: true,
      entityInformation: () => fileGroupQueryBuilderSpec,
    },
  ],
};
/**
 * Query Builder for fileGroup
 * Create a 'folder' like structure referencing to 'file', with custom ordering support.
 *
 * @param {StoreFileGroupQueryBuilder} [builder={}]
 * @returns {{
 *  then: () => void,
 *  exec: (sql: Postgres) => Promise<QueryResultStoreFileGroup[]>,
 *  execRaw: (sql: Postgres) => Promise<any[]>,
 *  queryPart: QueryPart<any>,
 * }}
 */
export function queryFileGroup(builder = {}) {
  const builderValidated = validateStoreFileGroupQueryBuilder(
    builder,
    "$.fileGroupBuilder",
  );
  if (builderValidated.error) {
    throw builderValidated.error;
  }
  builder = builderValidated.value;
  const qb = generatedQueryBuilderHelper(
    fileGroupQueryBuilderSpec,
    builder,
    {},
  );
  return {
    then: () => {
      throw AppError.serverError({
        message:
          "Awaited 'queryFileGroup' directly. Please use '.exec' or '.execRaw'.",
      });
    },
    execRaw: async (sql) => await qb.exec(sql),
    exec: async (sql) => {
      const result = await qb.exec(sql);
      transformFileGroup(result, builder);
      return result;
    },
    get queryPart() {
      return qb;
    },
  };
}
/**
 * NOTE: At the moment only intended for internal use by the generated queries!
 *
 * Transform results from the query builder that adhere to the known structure
 * of 'fileGroup' and its relations.
 *
 * @param {any[]} values
 * @param {StoreFileGroupQueryBuilder} [builder={}]
 */
export function transformFileGroup(values, builder = {}) {
  for (let i = 0; i < values.length; ++i) {
    let value = values[i];
    if (isPlainObject(value.result) && Object.keys(value).length === 1) {
      values[i] = value.result;
      value = value.result;
    }
    value.file = value.file ?? undefined;
    value.parent = value.parent ?? undefined;
    value.name = value.name ?? undefined;
    if (typeof value.createdAt === "string") {
      value.createdAt = new Date(value.createdAt);
    }
    if (typeof value.updatedAt === "string") {
      value.updatedAt = new Date(value.updatedAt);
    }
    value.deletedAt = value.deletedAt ?? undefined;
    if (typeof value.deletedAt === "string") {
      value.deletedAt = new Date(value.deletedAt);
    }
    value[builder.file?.as ?? "file"] =
      value[builder.file?.as ?? "file"] ?? undefined;
    if (isPlainObject(value[builder.file?.as ?? "file"])) {
      const arr = [value[builder.file?.as ?? "file"]];
      transformFile(arr, builder.file);
      value[builder.file?.as ?? "file"] = arr[0];
    }
    value[builder.parent?.as ?? "parent"] =
      value[builder.parent?.as ?? "parent"] ?? undefined;
    if (isPlainObject(value[builder.parent?.as ?? "parent"])) {
      const arr = [value[builder.parent?.as ?? "parent"]];
      transformFileGroup(arr, builder.parent);
      value[builder.parent?.as ?? "parent"] = arr[0];
    }
    value[builder.children?.as ?? "children"] =
      value[builder.children?.as ?? "children"] ?? undefined;
    if (Array.isArray(value[builder.children?.as ?? "children"])) {
      transformFileGroup(
        value[builder.children?.as ?? "children"],
        builder.children,
      );
    }
  }
}
