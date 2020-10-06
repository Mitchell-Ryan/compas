/**
 * Get the disk size (in bytes) and estimated row count for all tables and views.
 * To improve accuracy, run sql`ANALYZE` before this query, however make sure to read the
 * Postgres documentation for implications.
 *
 * @param {Postgres} sql
 * @returns {Promise<Object<string, { diskSize: number, rowCount: number }>>}
 */
export async function postgresTableSizes(sql) {
  const queryResult = await sql`
    SELECT relname                       AS "relation",
           pg_total_relation_size(c.oid) AS "diskSize",
           c.reltuples                   as "rowCount"
    FROM pg_class c
           LEFT JOIN pg_namespace n ON (n.oid = c.relnamespace)
    WHERE nspname NOT IN ('pg_catalog', 'information_schema')
      AND c.relkind = ANY (ARRAY ['r', 'v', 'm'])
      AND nspname !~ '^pg_toast'
  `;

  const result = {};

  for (const item of queryResult) {
    result[item.relation] = {
      diskSize: Number(item.diskSize),
      rowCount: Number(item.rowCount),
    };
  }

  return result;
}
