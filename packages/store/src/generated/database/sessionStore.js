// Generated by @compas/code-gen

import { wrapQueryPart } from "../common/database.js";
import { validateQueryResultStoreSessionStore } from "../queryResult/validators.js";
import {
  validateStoreSessionStore,
  validateStoreSessionStoreInsert,
  validateStoreSessionStoreOrderBy,
  validateStoreSessionStoreOrderBySpec,
  validateStoreSessionStoreQueryBuilder,
  validateStoreSessionStoreUpdate,
  validateStoreSessionStoreWhere,
} from "../store/validators.js";
import {
  sessionStoreTokenQueryBuilderSpec,
  sessionStoreTokenWhereSpec,
} from "./sessionStoreToken.js";
import { AppError, isNil } from "@compas/stdlib";
import {
  generatedQueryBuilderHelper,
  generatedUpdateHelper,
  generatedWhereBuilderHelper,
  isQueryPart,
  query,
} from "@compas/store";

export const sessionStoreQueries = {
  sessionStoreCount,
  sessionStoreInsert,
  sessionStoreUpdate,
  sessionStoreDelete,
  sessionStoreUpsertOnId,
};

/** @type {any} */
export const sessionStoreWhereSpec = {
  fieldSpecification: [
    {
      tableKey: "id",
      keyType: "uuid",
      matchers: [
        {
          matcherKey: "id",
          matcherType: "equal",
        },
        {
          matcherKey: "idNotEqual",
          matcherType: "notEqual",
        },
        {
          matcherKey: "idIn",
          matcherType: "in",
        },
        {
          matcherKey: "idNotIn",
          matcherType: "notIn",
        },
      ],
    },
    {
      tableKey: "createdAt",
      keyType: "timestamptz",
      matchers: [
        {
          matcherKey: "createdAt",
          matcherType: "equal",
        },
        {
          matcherKey: "createdAtNotEqual",
          matcherType: "notEqual",
        },
        {
          matcherKey: "createdAtIn",
          matcherType: "in",
        },
        {
          matcherKey: "createdAtNotIn",
          matcherType: "notIn",
        },
        {
          matcherKey: "createdAtGreaterThan",
          matcherType: "greaterThan",
        },
        {
          matcherKey: "createdAtLowerThan",
          matcherType: "lowerThan",
        },
      ],
    },
    {
      tableKey: "updatedAt",
      keyType: "timestamptz",
      matchers: [
        {
          matcherKey: "updatedAt",
          matcherType: "equal",
        },
        {
          matcherKey: "updatedAtNotEqual",
          matcherType: "notEqual",
        },
        {
          matcherKey: "updatedAtIn",
          matcherType: "in",
        },
        {
          matcherKey: "updatedAtNotIn",
          matcherType: "notIn",
        },
        {
          matcherKey: "updatedAtGreaterThan",
          matcherType: "greaterThan",
        },
        {
          matcherKey: "updatedAtLowerThan",
          matcherType: "lowerThan",
        },
      ],
    },
    {
      tableKey: "accessTokens",
      matchers: [
        {
          matcherKey: "viaAccessTokens",
          matcherType: "via",
          relation: {
            entityName: "sessionStoreToken",
            shortName: "sst",
            entityKey: "session",
            referencedKey: "id",
            where: () => sessionStoreTokenWhereSpec,
          },
        },
        {
          matcherKey: "accessTokensNotExists",
          matcherType: "notExists",
          relation: {
            entityName: "sessionStoreToken",
            shortName: "sst",
            entityKey: "session",
            referencedKey: "id",
            where: () => sessionStoreTokenWhereSpec,
          },
        },
      ],
    },
  ],
};

/**
 * Reusable where clause generator. This is used by other generated queries, and can be used inline in custom queries.
 *
 * @param {import("../common/types").StoreSessionStoreWhereInput} [where]
 * @param {{ skipValidator?: boolean, shortName?: string }} [options]
 * @returns {QueryPart<any>}
 */
export function sessionStoreWhere(where, options = {}) {
  options.shortName ??= "ss.";
  if (!options.shortName.endsWith(".")) {
    options.shortName += ".";
  }
  if (!options.skipValidator) {
    const { error, value } = validateStoreSessionStoreWhere(where ?? {});
    if (error) {
      throw AppError.serverError({ message: "Invalid where object", error });
    }
    where = value;
  }
  return generatedWhereBuilderHelper(
    sessionStoreWhereSpec,
    where ?? {},
    options.shortName,
  );
}

/**
 * Reusable ORDER BY clause generator. This is used by other generated queries, and can be used inline in custom queries.
 *
 * @param {import("../common/types").StoreSessionStoreOrderByInput} [orderBy]
 * @param {import("../common/types").StoreSessionStoreOrderBySpecInput} [orderBySpec]
 * @param {{ skipValidator?: boolean, shortName?: string }} [options]
 * @returns {QueryPart<any>}
 */
export function sessionStoreOrderBy(orderBy, orderBySpec, options = {}) {
  options.shortName ??= "ss.";
  if (!options.shortName.endsWith(".")) {
    options.shortName += ".";
  }
  orderBy ??= ["createdAt", "updatedAt", "id"];
  orderBySpec ??= {};
  if (!options.skipValidator) {
    const validatedOrderBy = validateStoreSessionStoreOrderBy(orderBy);
    if (validatedOrderBy.error) {
      throw AppError.serverError({
        message: "Invalid orderBy array",
        error: validatedOrderBy.error,
      });
    }
    orderBy = validatedOrderBy.value;
    const validatedOrderBySpec = validateStoreSessionStoreOrderBySpec(orderBy);
    if (validatedOrderBySpec.error) {
      throw AppError.serverError({
        message: "Invalid orderBySpec object",
        error: validatedOrderBySpec.error,
      });
    }
    orderBySpec = validatedOrderBySpec.value;
  }
  if (isQueryPart(orderBy)) {
    return orderBy;
  }
  let str = "";
  for (const value of orderBy) {
    if (str.length !== 0) {
      str += ", ";
    }
    str += `${options.shortName}"${value}" ${orderBySpec[value] ?? "ASC"}`;
  }
  return query([str]);
}

/**
 * Count the records in the 'sessionStore' table
 *
 * @param {import("@compas/store").Postgres} sql
 * @param {import("../common/types").StoreSessionStoreWhereInput} where
 * @returns {Promise<number>}
 */
async function sessionStoreCount(sql, where) {
  const [result] =
    await query`select count(ss."id") as "recordCount" FROM "sessionStore" ss WHERE ${sessionStoreWhere(
      where,
    )}`.exec(sql);
  return Number(result?.recordCount ?? "0");
}

/**
 * Insert a record in the 'sessionStore' table
 *
 * @param {import("@compas/store").Postgres} sql
 * @param {import("../common/types").StoreSessionStoreInsertInput["insert"]} insert
 * @param {{ withPrimaryKey?: boolean }} [options={}]
 * @returns {Promise<import("../common/types").StoreSessionStore[]>}
 */
function sessionStoreInsert(sql, insert, options = {}) {
  return sessionStoreInsertInternal({ insert, returning: "*" }).exec(sql);
}

/**
 * Insert a record in the 'sessionStore' table
 *
 * @param {import("../common/types").StoreSessionStoreInsertInput} input
 * @returns {import("@compas/store").WrappedQueryPart<import("../common/types").StoreSessionStore>}
 */
function sessionStoreInsertInternal(input) {
  const { error, value: validatedInput } =
    validateStoreSessionStoreInsert(input);
  if (error) {
    throw AppError.serverError({
      message: "Insert input validation failed",
      error,
    });
  }
  const qb = query`
  INSERT INTO "sessionStore"
    ("id","checksum","revokedAt","data","createdAt","updatedAt")
  VALUES
  `;
  /** @type {string[]} */
  const str = [];
  const args = [];
  for (const insert of validatedInput.insert) {
    if (str.length) {
      str.push(", (");
    } else {
      str.push("(");
    }
    if (isNil(insert.id)) {
      args.push(undefined);
      str.push("DEFAULT, ");
    } else {
      args.push(insert.id);
      str.push(", ");
    }
    args.push(insert.checksum ?? null);
    str.push(", ");
    args.push(insert.revokedAt ?? null);
    str.push(", ");
    if (!isNil(insert.data)) {
      args.push(JSON.stringify(insert.data));
    } else {
      args.push(null);
    }
    str.push(", ");
    if (isNil(insert.createdAt)) {
      args.push(undefined);
      str.push("DEFAULT, ");
    } else {
      args.push(insert.createdAt);
      str.push(", ");
    }
    if (isNil(insert.updatedAt)) {
      args.push(undefined);
      str.push("DEFAULT, ");
    } else {
      args.push(insert.updatedAt);
      str.push(", ");
    }
    // We have added an extra comma, so remove it.
    str[str.length - 1] = str.at(-1)?.slice(0, -2) ?? "";
    args.push(undefined);
    str.push(")");
    args.push(undefined);
  }
  if (validatedInput.returning === "*") {
    str.push(
      ` RETURNING "id","checksum","revokedAt","data","createdAt","updatedAt"`,
    );
    args.push(undefined);
  } else if (Array.isArray(validatedInput.returning)) {
    str.push(
      ` RETURNING ${JSON.stringify(validatedInput.returning).slice(1, -1)}`,
    );
    args.push(undefined);
  }
  qb.append(query(str, ...args));
  return wrapQueryPart(qb, validateStoreSessionStore, {
    hasCustomReturning: Array.isArray(validatedInput.returning),
  });
}

/**
 * Upsert a record in the 'sessionStore' table
 *
 * @param {import("@compas/store").Postgres} sql
 * @param {import("../common/types").StoreSessionStoreInsertInput["insert"]} insert
 * @returns {Promise<import("../common/types").StoreSessionStore[]>}
 */
function sessionStoreUpsertOnId(sql, insert) {
  return sessionStoreUpsertOnIdInternal({ insert, returning: "*" }).exec(sql);
}

/**
 * Upsert a record in the 'sessionStore' table based on the primary key.
 *
 * @param {import("../common/types").StoreSessionStoreInsertInput} input
 * @returns {import("@compas/store").WrappedQueryPart<import("../common/types").StoreSessionStore>}
 */
function sessionStoreUpsertOnIdInternal(input) {
  const { error, value: validatedInput } =
    validateStoreSessionStoreInsert(input);
  if (error) {
    throw AppError.serverError({
      message: "Insert input validation failed",
      error,
    });
  }
  const { queryPart } = sessionStoreInsertInternal({ insert: input.insert });
  /** @type {string[]} */
  const str = [];
  const args = [];
  str.push(`ON CONFLICT ("id") DO UPDATE SET
    "checksum" = COALESCE(EXCLUDED."checksum", "sessionStore"."checksum"),
    "revokedAt" = COALESCE(EXCLUDED."revokedAt", "sessionStore"."revokedAt"),
    "data" = COALESCE(EXCLUDED."data", "sessionStore"."data"),
    "updatedAt" = COALESCE(EXCLUDED."updatedAt", "sessionStore"."updatedAt")`);
  if (validatedInput.returning === "*") {
    str.push(
      ` RETURNING "id","checksum","revokedAt","data","createdAt","updatedAt"`,
    );
    args.push(undefined);
  } else if (Array.isArray(validatedInput.returning)) {
    str.push(
      ` RETURNING ${JSON.stringify(validatedInput.returning).slice(1, -1)}`,
    );
    args.push(undefined);
  }
  queryPart.append(query(str, ...args));
  return wrapQueryPart(queryPart, validateStoreSessionStore, {
    hasCustomReturning: Array.isArray(validatedInput.returning),
  });
}

/** @type {any} */
const sessionStoreUpdateSpec = {
  schemaName: "",
  name: "sessionStore",
  shortName: "ss",
  columns: ["id", "checksum", "revokedAt", "data", "createdAt", "updatedAt"],
  where: sessionStoreWhereSpec,
  injectUpdatedAt: true,
  fields: {
    id: {
      type: "uuid",
      atomicUpdates: [],
    },
    checksum: {
      type: "string",
      atomicUpdates: ["$append"],
    },
    revokedAt: {
      type: "date",
      atomicUpdates: ["$add", "$subtract"],
    },
    data: {
      type: "jsonb",
      atomicUpdates: ["$set", "$remove"],
    },
    createdAt: {
      type: "date",
      atomicUpdates: ["$add", "$subtract"],
    },
    updatedAt: {
      type: "date",
      atomicUpdates: ["$add", "$subtract"],
    },
  },
};

/**
 * Insert a record in the 'sessionStore' table
 *
 * @param {import("@compas/store").Postgres} sql
 * @param {import("../common/types").StoreSessionStoreUpdateInput} update
 * @returns {Promise<import("../common/types").StoreSessionStore[]>}
 */
function sessionStoreUpdate(sql, update) {
  if (update?.returning === "*" || !update?.returning) {
    return sessionStoreUpdateInternal(update).exec(sql);
  }
  return sessionStoreUpdateInternal(update).execRaw(sql);
}

/**
 * Update records in the 'sessionStore' table
 *
 * @param {import("../common/types").StoreSessionStoreUpdateInput} input
 * @returns {import("@compas/store").WrappedQueryPart<import("../common/types").StoreSessionStore>}
 */
function sessionStoreUpdateInternal(input) {
  const { error, value: validatedInput } =
    validateStoreSessionStoreUpdate(input);
  if (error) {
    throw AppError.serverError({
      message: "Update input validation failed",
      error,
    });
  }
  return wrapQueryPart(
    generatedUpdateHelper(sessionStoreUpdateSpec, validatedInput),
    validateStoreSessionStore,
    { hasCustomReturning: Array.isArray(validatedInput.returning) },
  );
}

/**
 * Insert a record in the 'sessionStore' table
 *
 * @param {import("@compas/store").Postgres} sql
 * @param {import("../common/types").StoreSessionStoreWhereInput} [where]
 * @returns {Promise<void>}
 */
function sessionStoreDelete(sql, where = {}) {
  return sessionStoreDeleteInternal(where).exec(sql);
}

/**
 * Remove records from the 'sessionStore' table
 *
 * @param {import("../common/types").StoreSessionStoreWhereInput} [where]
 * @returns {import("@compas/store").QueryPart<any>}
 */
function sessionStoreDeleteInternal(where = {}) {
  return query`DELETE FROM "sessionStore" ss WHERE ${sessionStoreWhere(where)}`;
}

/** @type {any} */
export const sessionStoreQueryBuilderSpec = {
  name: "sessionStore",
  shortName: "ss",
  orderByExperimental: sessionStoreOrderBy,
  where: sessionStoreWhereSpec,
  columns: ["id", "checksum", "revokedAt", "data", "createdAt", "updatedAt"],
  relations: [
    {
      builderKey: "accessTokens",
      ownKey: "id",
      referencedKey: "session",
      returnsMany: true,
      entityInformation: () => sessionStoreTokenQueryBuilderSpec,
    },
  ],
};

/**
 * Query records in the 'sessionStore' table, optionally joining related tables.
 *
 * @param {import("../common/types").StoreSessionStoreQueryBuilderInput} [input]
 * @returns {import("@compas/store").WrappedQueryPart<import("../common/types").QueryResultStoreSessionStore>}
 */
export function querySessionStore(input = {}) {
  const { error, value: validatedInput } =
    validateStoreSessionStoreQueryBuilder(input);
  if (error) {
    throw AppError.serverError({
      message: "Query builder input validation failed",
      error,
    });
  }
  return wrapQueryPart(
    generatedQueryBuilderHelper(
      sessionStoreQueryBuilderSpec,
      validatedInput,
      {},
    ),
    validateQueryResultStoreSessionStore,
    { hasCustomReturning: validatedInput.select?.length !== 6 },
  );
}
