import { isPlainObject } from "@compas/stdlib";
import { partialAsString } from "../../partials/helpers.js";
import { upperCaseFirst } from "../../utils.js";

/**
 * @param {{
 *   crudName: string,
 *   entityUniqueName: string,
 *   entityName: string,
 * }} data
 * @returns {string}
 */
export const crudPartialEventCount = (data) => `
/**
 * Count function, resolving pagination parameters
 *
 * @param {InsightEvent} event
 * @param {Postgres} sql
 * @param {${data.entityUniqueName}QueryBuilder} builder
 * @param {${upperCaseFirst(data.crudName)}ListQuery} queryParams
 * @returns {Promise<{ total: number, idIn: string[] }>}
 */
export async function ${data.crudName}Count(event, sql, builder, queryParams) {
  eventStart(event, "${data.crudName}.count");
  
  const result  = await query${upperCaseFirst(
    data.entityName,
  )}(builder).exec(sql);
  
  const total = result.length;
  const slice = result.slice(queryParams.offset, queryParams.offset + queryParams.limit);
  
  eventStop(event);
  
  return { 
    total,
    idIn: slice.map(it => it.id),
  };
}
`;

/**
 * @param {{
 *   crudName: string,
 *   entityUniqueName: string,
 *   entityName: string,
 * }} data
 * @returns {string}
 */
export const crudPartialEventList = (data) => `
/**
 * List ${data.crudName} entities
 *
 * @param {InsightEvent} event
 * @param {Postgres} sql
 * @param {${data.entityUniqueName}QueryBuilder} builder
 * @returns {Promise<QueryResult${data.entityUniqueName}[]>}
 */
export async function ${data.crudName}List(event, sql, builder) {
  eventStart(event, "${data.crudName}.list");
  
  const result  = await query${upperCaseFirst(
    data.entityName,
  )}(builder).exec(sql);
  
  eventStop(event);
  
  return result;
}
`;

/**
 * @param {{
 *   crudName: string,
 *   entityUniqueName: string,
 *   entityName: string,
 * }} data
 * @returns {string}
 */
export const crudPartialEventSingle = (data) => `
/**
 * Find a single ${data.crudName} entity
 *
 * @param {InsightEvent} event
 * @param {Postgres} sql
 * @param {${data.entityUniqueName}QueryBuilder} builder
 * @returns {Promise<QueryResult${data.entityUniqueName}>}
 */
export async function ${data.crudName}Single(event, sql, builder) {
  eventStart(event, "${data.crudName}.single");
  
  const result  = await query${upperCaseFirst(
    data.entityName,
  )}(builder).exec(sql);
  
  if (result.length !== 1) {
    throw AppError.validationError("${data.crudName}.single.notFound");
  }
  
  eventStop(event);
  
  return result[0];
}
`;

/**
 * @param {{
 *   crudName: string,
 *   entityUniqueName: string,
 *   entityName: string,
 *   builder: string,
 *   inlineRelations: {
 *     name: string,
 *     referencedKey: string,
 *     entityName: string,
 *     isInlineArray: boolean,
 *     inlineRelations: any[],
 *   }[]
 * }} data
 * @returns {string}
 */
export const crudPartialEventCreate = (data) => `
/**
 * Create a new ${data.crudName} entity
 *
 * @param {InsightEvent} event
 * @param {Postgres} sql
 * @param {${upperCaseFirst(data.crudName)}CreateBody} body
 * @returns {Promise<QueryResult${data.entityUniqueName}>}
 */
export async function ${data.crudName}Create(event, sql, body) {
  eventStart(event, "${data.crudName}.create");
  
  ${partialAsString(
    data.inlineRelations.map((it) => [
      `let ${it.name} = [body.${it.name}];`,
      `delete body.${it.name}`,
    ]),
  )}
  
  
  const result = await queries.${data.entityName}Insert(sql, body);
  
  ${crudPartialInlineRelationInserts(data.inlineRelations, "result")}
  
  const builder = ${data.builder};
  builder.where.id = result[0].id;
  const _item = await ${
    data.crudName
  }Single(newEventFromEvent(event), sql, builder);
  
  eventStop(event);
  
  return _item;
}
`;

/**
 * @param {{
 *   crudName: string,
 *   entityUniqueName: string,
 *   entityName: string,
 *   inlineRelations: {
 *     name: string,
 *     referencedKey: string,
 *     entityName: string,
 *     isInlineArray: boolean,
 *     inlineRelations: any[],
 *   }[]
 * }} data
 * @returns {string}
 */
export const crudPartialEventUpdate = (data) => `
/**
 * Update a ${data.crudName} entity
 *
 * @param {InsightEvent} event
 * @param {Postgres} sql
 * @param {QueryResult${data.entityUniqueName}} entity
 * @param {${upperCaseFirst(data.crudName)}UpdateBody} body
 * @returns {Promise<void>}
 */
export async function ${data.crudName}Update(event, sql, entity, body) {
  eventStart(event, "${data.crudName}.update");
  
  ${partialAsString(
    data.inlineRelations.map((it) => [
      `let ${it.name} = [body.${it.name}];`,
      `delete body.${it.name}`,
    ]),
  )}
  
  const result = await queries.${data.entityName}Update(sql, {
    update: body,
    where: {
      id: entity.id,
    },
    returning: ["id"],
  });
  
  ${data.inlineRelations.length > 0 ? "await Promise.all([" : ""}
  ${partialAsString(
    data.inlineRelations.map(
      (it) =>
        `queries.${it.entityName}Delete(sql, { ${it.referencedKey}: id }),`,
    ),
  )}
  ${data.inlineRelations.length > 0 ? "])" : ""}
  
  ${crudPartialInlineRelationInserts(data.inlineRelations, "result")}
  
  eventStop(event);
}
`;

/**
 * @param {{
 *     name: string,
 *     referencedKey: string,
 *     entityName: string,
 *     isInlineArray: boolean,
 *     inlineRelations: any[],
 *   }[]} relations
 * @param {string} parentName
 * @returns {string}
 */
export const crudPartialInlineRelationInserts = (relations, parentName) =>
  partialAsString(
    relations.map(
      (relation) => `{
      for (let i = 0; i < ${relation.name}.length; ++i) {
        ${
          relation.isInlineArray
            ? `${relation.name}[i].map(it => it.${relation.referencedKey} = ${parentName}[i].id)`
            : `${relation.name}[i].${relation.referencedKey} = ${parentName}[i].id`
        }
      }
      
      ${
        relation.isInlineArray
          ? `${relation.name} = ${relation.name}.flat();`
          : ``
      }
      
      ${partialAsString(
        relation.inlineRelations.map((it) => `let ${it.name} = [];`),
      )}
      
      ${
        relation.inlineRelations.length > 0
          ? `
        for (const it of ${relation.name}) {
          ${partialAsString(
            relation.inlineRelations.map((it) => [
              `${it.name}.push(it.${it.name});`,
              `delete it.${it.name};`,
            ]),
          )}
        }
      `
          : ``
      }
      
      ${relation.name} = await queries.${relation.entityName}Insert(sql, ${
        relation.name
      });
      
      ${crudPartialInlineRelationInserts(
        relation.inlineRelations,
        relation.name,
      )}
    }
    `,
    ),
  );

/**
 * @param {{
 *   crudName: string,
 *   entityUniqueName: string,
 *   entityName: string,
 * }} data
 * @returns {string}
 */
export const crudPartialEventDelete = (data) => `
/**
 * Delete a ${data.crudName} entity
 *
 * @param {InsightEvent} event
 * @param {Postgres} sql
 * @param {QueryResult${data.entityUniqueName}} entity
 * @returns {Promise<void>}
 */
export async function ${data.crudName}Delete(event, sql, entity) {
  eventStart(event, "${data.crudName}.delete");
  
  await queries.${data.entityName}Delete(sql, {
    id: entity.id,
  });
  
  eventStop(event);
}
`;

/**
 * @param {{
 *   crudName: string,
 *   entityUniqueName: string,
 *   entityName: string,
 *   entity: Record<string, boolean|Record<string, boolean>>
 * }} data
 * @returns {string}
 */
export const crudPartialEventTransformer = (data) => `
/**
 * Transform ${data.entityName} entity to the response type 
 *
 * @param {QueryResult${data.entityUniqueName}} input
 * @returns {${upperCaseFirst(data.crudName)}Item}
 */
export function ${data.crudName}Transform(input) {
  return {
    ${crudPartialFormatObject(data.entity, "input")}
  }
}
`;

const crudPartialFormatObject = (keys, source) =>
  partialAsString(
    Object.entries(keys).map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${key}: ${source}.${key}.map(it => ({
      ${crudPartialFormatObject(value[0], "it")}
    })),`;
      } else if (isPlainObject(value)) {
        return crudPartialFormatObject(value, `${source}.${key}`);
      }

      return `${key}: ${source}.${key},`;
    }),
  );
