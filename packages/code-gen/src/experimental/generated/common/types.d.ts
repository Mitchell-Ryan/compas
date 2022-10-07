// Generated by @compas/code-gen
/* eslint-disable no-unused-vars */

export type ExperimentalAnyDefinition = {
  type: "any";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: { allowNull: boolean };
  rawValue?: undefined | string;
  rawValueImport: {
    javaScript?: undefined | string;
    typeScript?: undefined | string;
  };
  rawValidator?: undefined | string;
  rawValidatorImport: {
    javaScript?: undefined | string;
    typeScript?: undefined | string;
  };
};
export type ExperimentalAnyOfDefinition = {
  type: "anyOf";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: {};
  values: ExperimentalTypeDefinition[];
};
export type ExperimentalTypeDefinition =
  | ExperimentalNamedTypeDefinition
  | ExperimentalReferenceDefinition
  | ExperimentalRelationDefinition
  | ExperimentalRouteInvalidationDefinition;
export type ExperimentalNamedTypeDefinition =
  | ExperimentalAnyDefinition
  | ExperimentalAnyOfDefinition
  | ExperimentalArrayDefinition
  | ExperimentalBooleanDefinition
  | ExperimentalCrudDefinition
  | ExperimentalDateDefinition
  | ExperimentalExtendDefinition
  | ExperimentalFileDefinition
  | ExperimentalGenericDefinition
  | ExperimentalNumberDefinition
  | ExperimentalObjectDefinition
  | ExperimentalOmitDefinition
  | ExperimentalPickDefinition
  | ExperimentalRouteDefinition
  | ExperimentalStringDefinition
  | ExperimentalUuidDefinition;
export type ExperimentalArrayDefinition = {
  type: "array";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: {
    convert: boolean;
    min?: undefined | number;
    max?: undefined | number;
  };
  values: ExperimentalTypeDefinition;
};
export type ExperimentalBooleanDefinition = {
  type: "boolean";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: { convert: boolean; allowNull: boolean };
  oneOf?: undefined | boolean;
};
export type ExperimentalCrudDefinition = {
  type: "crud";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: {};
  basePath?: undefined | string;
  entity?: undefined | ExperimentalReferenceDefinition;
  fromParent?:
    | undefined
    | { field: string; options?: undefined | { name?: undefined | string } };
  routeOptions: {
    listRoute?: undefined | boolean;
    singleRoute?: undefined | boolean;
    createRoute?: undefined | boolean;
    updateRoute?: undefined | boolean;
    deleteRoute?: undefined | boolean;
  };
  fieldOptions: {
    readable?:
      | undefined
      | { $omit?: undefined | string[]; $pick?: undefined | string[] };
    writable?:
      | undefined
      | { $omit?: undefined | string[]; $pick?: undefined | string[] };
  };
  inlineRelations: ExperimentalCrudDefinition[];
  nestedRelations: ExperimentalCrudDefinition[];
};
export type ExperimentalReferenceDefinition = {
  type: "reference";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: {};
  reference: { group: ExperimentalNamePart; name: ExperimentalNamePart };
};
export type ExperimentalNamePart = string;
export type ExperimentalDateDefinition = {
  type: "date";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: {
    allowNull: boolean;
    min?: undefined | Date;
    max?: undefined | Date;
    inFuture?: undefined | boolean;
    inPast?: undefined | boolean;
  };
  specifier?: undefined | "dateOnly" | "timeOnly";
};
export type ExperimentalExtendDefinition = {
  type: "extend";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: {};
  keys: { [key: string]: ExperimentalTypeDefinition };
  reference: ExperimentalReferenceDefinition;
};
export type ExperimentalFileDefinition = {
  type: "file";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: { mimeTypes?: undefined | string[] };
};
export type ExperimentalGenericDefinition = {
  type: "generic";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: {};
  keys: ExperimentalTypeDefinition;
  values: ExperimentalTypeDefinition;
};
export type ExperimentalNumberDefinition = {
  type: "number";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: {
    convert: boolean;
    floatingPoint: boolean;
    min?: undefined | number;
    max?: undefined | number;
    allowNull: boolean;
  };
  oneOf?: undefined | number[];
};
export type ExperimentalObjectDefinition = {
  type: "object";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: { allowNull: boolean; strict: boolean };
  shortName?: undefined | string;
  keys: { [key: string]: ExperimentalTypeDefinition };
  enableQueries?: undefined | boolean;
  queryOptions?:
    | undefined
    | {
        withSoftDeletes?: undefined | boolean;
        withDates?: undefined | boolean;
        withPrimaryKey: boolean;
        isView?: undefined | boolean;
        schema?: undefined | string;
      };
  relations: ExperimentalRelationDefinition[];
};
export type ExperimentalRelationDefinition = {
  type: "relation";
  subType: "manyToOne" | "oneToMany" | "oneToOne" | "oneToOneReverse";
  reference: ExperimentalReferenceDefinition;
  ownKey: string;
  referencedKey?: undefined | string;
  isOptional: boolean;
};
export type ExperimentalOmitDefinition = {
  type: "omit";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: { allowNull: boolean; strict: boolean };
  keys: string[];
  reference: ExperimentalReferenceDefinition;
};
export type ExperimentalPickDefinition = {
  type: "pick";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: { allowNull: boolean; strict: boolean };
  keys: string[];
  reference: ExperimentalReferenceDefinition;
};
export type ExperimentalRouteDefinition = {
  type: "route";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: {};
  method: "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "PATCH";
  idempotent: boolean;
  path: string;
  tags: string[];
  query?: undefined | ExperimentalReferenceDefinition;
  params?: undefined | ExperimentalReferenceDefinition;
  body?: undefined | ExperimentalReferenceDefinition;
  files?: undefined | ExperimentalReferenceDefinition;
  response?: undefined | ExperimentalReferenceDefinition;
  invalidations: ExperimentalRouteInvalidationDefinition[];
  metadata?:
    | undefined
    | {
        stripTrailingSlash?: undefined | boolean;
        requestBodyType?: undefined | "json" | "form-data";
      };
};
export type ExperimentalRouteInvalidationDefinition = {
  type: "routeInvalidation";
  target: { group: ExperimentalNamePart; name?: ExperimentalNamePartOptional };
  properties: {
    useSharedParams?: undefined | boolean;
    useSharedQuery?: undefined | boolean;
    specification?:
      | undefined
      | {
          params: { [key: string]: string[] };
          query: { [key: string]: string[] };
        };
  };
};
export type ExperimentalNamePartOptional = undefined | string;
export type ExperimentalStringDefinition = {
  type: "string";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: {
    convert: boolean;
    trim: boolean;
    lowerCase: boolean;
    upperCase: boolean;
    min: number;
    max?: undefined | number;
    pattern?: undefined | string;
    allowNull: boolean;
    disallowedCharacters?: undefined | string[];
  };
  oneOf?: undefined | string[];
};
export type ExperimentalUuidDefinition = {
  type: "uuid";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: { allowNull: boolean };
};
export type ExperimentalGenerateOptions = {
  targetLanguage: "js" | "ts";
  outputDirectory?: undefined | string;
  generators: {
    structure?: undefined | {};
    openApi?:
      | undefined
      | {
          openApiExtensions?: undefined | any;
          openApiRouteExtensions?: undefined | any;
        };
    router?:
      | undefined
      | { target: { library: "koa" }; exposeApiStructure: boolean };
    database?: undefined | { target: { dialect: "postgres" } };
    validators?: undefined | { includeBaseTypes: boolean };
    apiClient?:
      | undefined
      | {
          target: {
            library: "axios";
            targetRuntime?: undefined | "node.js" | "browser" | "react-native";
            includeWrapper?: undefined | "react-query";
          };
          validateResponses: boolean;
          globalClient: boolean;
        };
    types?:
      | undefined
      | {
          useGlobalTypes: boolean;
          useGlobalCompasTypes: boolean;
          generateDeduplicatedTypes: boolean;
          useDeduplicatedTypesPath?: undefined | string;
        };
  };
};
export type ExperimentalStructure = {
  [key: ExperimentalNamePart]: {
    [key: ExperimentalNamePart]: ExperimentalNamedTypeDefinition;
  };
};
export type ExperimentalAnyDefinitionInput = ExperimentalAnyDefinition;
export type ExperimentalAnyOfDefinitionInput = {
  type: "anyOf";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: {};
  values: import("./../common/types").ExperimentalTypeDefinitionInput[];
};
export type ExperimentalTypeDefinitionInput =
  | import("./../common/types").ExperimentalNamedTypeDefinitionInput
  | import("./../common/types").ExperimentalReferenceDefinitionInput
  | import("./../common/types").ExperimentalRelationDefinitionInput
  | import("./../common/types").ExperimentalRouteInvalidationDefinitionInput;
export type ExperimentalNamedTypeDefinitionInput =
  | import("./../common/types").ExperimentalAnyDefinitionInput
  | import("./../common/types").ExperimentalAnyOfDefinitionInput
  | import("./../common/types").ExperimentalArrayDefinitionInput
  | import("./../common/types").ExperimentalBooleanDefinitionInput
  | import("./../common/types").ExperimentalCrudDefinitionInput
  | import("./../common/types").ExperimentalDateDefinitionInput
  | import("./../common/types").ExperimentalExtendDefinitionInput
  | import("./../common/types").ExperimentalFileDefinitionInput
  | import("./../common/types").ExperimentalGenericDefinitionInput
  | import("./../common/types").ExperimentalNumberDefinitionInput
  | import("./../common/types").ExperimentalObjectDefinitionInput
  | import("./../common/types").ExperimentalOmitDefinitionInput
  | import("./../common/types").ExperimentalPickDefinitionInput
  | import("./../common/types").ExperimentalRouteDefinitionInput
  | import("./../common/types").ExperimentalStringDefinitionInput
  | import("./../common/types").ExperimentalUuidDefinitionInput;
export type ExperimentalArrayDefinitionInput = {
  type: "array";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: {
    convert: boolean;
    min?: undefined | number;
    max?: undefined | number;
  };
  values: import("./../common/types").ExperimentalTypeDefinitionInput;
};
export type ExperimentalBooleanDefinitionInput = ExperimentalBooleanDefinition;
export type ExperimentalCrudDefinitionInput = {
  type: "crud";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: {};
  basePath?: undefined | string;
  entity?:
    | undefined
    | import("./../common/types").ExperimentalReferenceDefinitionInput;
  fromParent?:
    | undefined
    | { field: string; options?: undefined | { name?: undefined | string } };
  routeOptions: {
    listRoute?: undefined | boolean;
    singleRoute?: undefined | boolean;
    createRoute?: undefined | boolean;
    updateRoute?: undefined | boolean;
    deleteRoute?: undefined | boolean;
  };
  fieldOptions: {
    readable?:
      | undefined
      | { $omit?: undefined | string[]; $pick?: undefined | string[] };
    writable?:
      | undefined
      | { $omit?: undefined | string[]; $pick?: undefined | string[] };
  };
  inlineRelations: import("./../common/types").ExperimentalCrudDefinitionInput[];
  nestedRelations: import("./../common/types").ExperimentalCrudDefinitionInput[];
};
export type ExperimentalReferenceDefinitionInput = {
  type: "reference";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: {};
  reference: {
    group: import("./../common/types").ExperimentalNamePartInput;
    name: import("./../common/types").ExperimentalNamePartInput;
  };
};
export type ExperimentalNamePartInput = ExperimentalNamePart;
export type ExperimentalDateDefinitionInput = ExperimentalDateDefinition;
export type ExperimentalExtendDefinitionInput = {
  type: "extend";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: {};
  keys: {
    [key: string]: import("./../common/types").ExperimentalTypeDefinitionInput;
  };
  reference: import("./../common/types").ExperimentalReferenceDefinitionInput;
};
export type ExperimentalFileDefinitionInput = ExperimentalFileDefinition;
export type ExperimentalGenericDefinitionInput = {
  type: "generic";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: {};
  keys: import("./../common/types").ExperimentalTypeDefinitionInput;
  values: import("./../common/types").ExperimentalTypeDefinitionInput;
};
export type ExperimentalNumberDefinitionInput = ExperimentalNumberDefinition;
export type ExperimentalObjectDefinitionInput = {
  type: "object";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: { allowNull: boolean; strict: boolean };
  shortName?: undefined | string;
  keys: {
    [key: string]: import("./../common/types").ExperimentalTypeDefinitionInput;
  };
  enableQueries?: undefined | boolean;
  queryOptions?:
    | undefined
    | {
        withSoftDeletes?: undefined | boolean;
        withDates?: undefined | boolean;
        withPrimaryKey: boolean;
        isView?: undefined | boolean;
        schema?: undefined | string;
      };
  relations: import("./../common/types").ExperimentalRelationDefinitionInput[];
};
export type ExperimentalRelationDefinitionInput = {
  type: "relation";
  subType: "manyToOne" | "oneToMany" | "oneToOne" | "oneToOneReverse";
  reference: import("./../common/types").ExperimentalReferenceDefinitionInput;
  ownKey: string;
  referencedKey?: undefined | string;
  isOptional: boolean;
};
export type ExperimentalOmitDefinitionInput = {
  type: "omit";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: { allowNull: boolean; strict: boolean };
  keys: string[];
  reference: import("./../common/types").ExperimentalReferenceDefinitionInput;
};
export type ExperimentalPickDefinitionInput = {
  type: "pick";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: { allowNull: boolean; strict: boolean };
  keys: string[];
  reference: import("./../common/types").ExperimentalReferenceDefinitionInput;
};
export type ExperimentalRouteDefinitionInput = {
  type: "route";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: {};
  method: "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "PATCH";
  idempotent: boolean;
  path: string;
  tags: string[];
  query?:
    | undefined
    | import("./../common/types").ExperimentalReferenceDefinitionInput;
  params?:
    | undefined
    | import("./../common/types").ExperimentalReferenceDefinitionInput;
  body?:
    | undefined
    | import("./../common/types").ExperimentalReferenceDefinitionInput;
  files?:
    | undefined
    | import("./../common/types").ExperimentalReferenceDefinitionInput;
  response?:
    | undefined
    | import("./../common/types").ExperimentalReferenceDefinitionInput;
  invalidations: import("./../common/types").ExperimentalRouteInvalidationDefinitionInput[];
  metadata?:
    | undefined
    | {
        stripTrailingSlash?: undefined | boolean;
        requestBodyType?: undefined | "json" | "form-data";
      };
};
export type ExperimentalRouteInvalidationDefinitionInput = {
  type: "routeInvalidation";
  target: {
    group: import("./../common/types").ExperimentalNamePartInput;
    name?: import("./../common/types").ExperimentalNamePartOptionalInput;
  };
  properties: {
    useSharedParams?: undefined | boolean;
    useSharedQuery?: undefined | boolean;
    specification?:
      | undefined
      | {
          params: { [key: string]: string[] };
          query: { [key: string]: string[] };
        };
  };
};
export type ExperimentalNamePartOptionalInput = ExperimentalNamePartOptional;
export type ExperimentalStringDefinitionInput = {
  type: "string";
  group?: undefined | string;
  name?: undefined | string;
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  sql: {
    primary?: undefined | boolean;
    searchable?: undefined | boolean;
    hasDefaultValue?: undefined | boolean;
  };
  validator: {
    convert: boolean;
    trim: boolean;
    lowerCase: boolean;
    upperCase: boolean;
    min?: undefined | number;
    max?: undefined | number;
    pattern?: undefined | string;
    allowNull: boolean;
    disallowedCharacters?: undefined | string[];
  };
  oneOf?: undefined | string[];
};
export type ExperimentalUuidDefinitionInput = ExperimentalUuidDefinition;
export type ExperimentalGenerateOptionsInput = {
  targetLanguage: "js" | "ts";
  outputDirectory?: undefined | string;
  generators: {
    structure?: undefined | {};
    openApi?:
      | undefined
      | {
          openApiExtensions?: undefined | any;
          openApiRouteExtensions?: undefined | any;
        };
    router?:
      | undefined
      | {
          target: { library: "koa" };
          exposeApiStructure?: undefined | boolean;
        };
    database?: undefined | { target: { dialect: "postgres" } };
    validators?: undefined | { includeBaseTypes?: undefined | boolean };
    apiClient?:
      | undefined
      | {
          target: {
            library: "axios";
            targetRuntime?: undefined | "node.js" | "browser" | "react-native";
            includeWrapper?: undefined | "react-query";
          };
          validateResponses?: undefined | boolean;
          globalClient?: undefined | boolean;
        };
    types?:
      | undefined
      | {
          useGlobalTypes?: undefined | boolean;
          useGlobalCompasTypes?: undefined | boolean;
          generateDeduplicatedTypes?: undefined | boolean;
          useDeduplicatedTypesPath?: undefined | string;
        };
  };
};
export type ExperimentalStructureInput = {
  [key: import("./../common/types").ExperimentalNamePartInput]: {
    [
      key: import("./../common/types").ExperimentalNamePartInput
    ]: import("./../common/types").ExperimentalNamedTypeDefinitionInput;
  };
};
