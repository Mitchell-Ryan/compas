// Generated by @compas/code-gen
/* eslint-disable no-unused-vars */

export type CodeGenAnyOfType = {
  type: "anyOf";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: {};
  internalSettings: {};
  values: CodeGenType[];
};
export type CodeGenType =
  | CodeGenAnyType
  | CodeGenAnyOfType
  | CodeGenArrayType
  | CodeGenBooleanType
  | CodeGenDateType
  | CodeGenFileType
  | CodeGenGenericType
  | CodeGenNumberType
  | CodeGenObjectType
  | CodeGenReferenceType
  | CodeGenStringType
  | CodeGenUuidType
  | CodeGenRouteType
  | CodeGenExtendType
  | CodeGenOmitType
  | CodeGenPickType
  | CodeGenCrudType;
export type CodeGenAnyType = {
  type: "any";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: { allowNull: boolean };
  internalSettings: {};
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
export type CodeGenArrayType = {
  type: "array";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: {
    convert: boolean;
    min?: undefined | number;
    max?: undefined | number;
  };
  internalSettings: {};
  values: CodeGenType;
};
export type CodeGenBooleanType = {
  type: "boolean";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: { convert: boolean; allowNull: boolean };
  internalSettings: {};
  oneOf?: undefined | boolean;
};
export type CodeGenDateType = {
  type: "date";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: {
    allowNull: boolean;
    min?: undefined | Date;
    max?: undefined | Date;
    inFuture?: undefined | boolean;
    inPast?: undefined | boolean;
  };
  internalSettings: {};
  specifier?: undefined | "dateOnly" | "timeOnly";
};
export type CodeGenFileType = {
  type: "file";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: { mimeTypes?: undefined | string[] };
  internalSettings: {};
};
export type CodeGenGenericType = {
  type: "generic";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: {};
  internalSettings: {};
  keys: CodeGenType;
  values: CodeGenType;
};
export type CodeGenNumberType = {
  type: "number";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: {
    convert: boolean;
    floatingPoint: boolean;
    min?: undefined | number;
    max?: undefined | number;
    allowNull: boolean;
  };
  internalSettings: {};
  oneOf?: undefined | number[];
};
export type CodeGenObjectType = {
  type: "object";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: { allowNull: boolean; strict: boolean };
  internalSettings: {};
  shortName?: undefined | string;
  keys: { [key: string]: CodeGenType };
  enableQueries: boolean;
  queryOptions?:
    | undefined
    | {
        withSoftDeletes: boolean;
        withDates: boolean;
        withPrimaryKey: boolean;
        isView: boolean;
        schema: string;
      };
  relations: CodeGenRelationType[];
  where?:
    | undefined
    | {
        type: string;
        rawType: CodeGenObjectType;
        fields: {
          key: string;
          name: string;
          isRelation: boolean;
          variant:
            | "equal"
            | "notEqual"
            | "in"
            | "notIn"
            | "greaterThan"
            | "lowerThan"
            | "isNull"
            | "isNotNull"
            | "includeNotNull"
            | "like"
            | "iLike"
            | "notLike"
            | "exists"
            | "notExists";
        }[];
      };
  orderBy?:
    | undefined
    | {
        type: string;
        specType: string;
        fields: { key: string; optional: boolean }[];
      };
  partial?:
    | undefined
    | {
        insertType: string;
        updateType: string;
        fields: {
          key: string;
          defaultValue?: undefined | string;
          hasSqlDefault: boolean;
          isJsonb: boolean;
        }[];
      };
};
export type CodeGenRelationType = {
  type: "relation";
  subType: "manyToOne" | "oneToMany" | "oneToOne" | "oneToOneReverse";
  reference: CodeGenReferenceType;
  ownKey: string;
  referencedKey?: undefined | string;
  isOptional: boolean;
};
export type CodeGenReferenceType = {
  type: "reference";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: {};
  internalSettings: {};
  reference:
    | CodeGenType
    | {
        group?: undefined | string;
        name?: undefined | string;
        uniqueName?: undefined | string;
      };
};
export type CodeGenStringType = {
  type: "string";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
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
  internalSettings: {};
  oneOf?: undefined | string[];
};
export type CodeGenUuidType = {
  type: "uuid";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: { allowNull: boolean };
  internalSettings: {};
};
export type CodeGenRouteType = {
  type: "route";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: {};
  internalSettings: {
    stripTrailingSlash?: undefined | boolean;
    requestBodyType?: undefined | "json" | "form-data";
  };
  method: "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "PATCH";
  idempotent: boolean;
  path: string;
  tags: string[];
  query?: undefined | CodeGenType;
  params?: undefined | CodeGenType;
  body?: undefined | CodeGenType;
  files?: undefined | CodeGenType;
  response?: undefined | CodeGenType;
  invalidations: CodeGenRouteInvalidationType[];
};
export type CodeGenRouteInvalidationType = {
  type: "routeInvalidation";
  target: { group: string; name?: undefined | string };
  properties: {
    useSharedParams: boolean;
    useSharedQuery: boolean;
    specification: {
      params: { [key: string]: string[] };
      query: { [key: string]: string[] };
    };
  };
};
export type CodeGenExtendType = {
  type: "extend";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: {};
  internalSettings: {};
  keys: { [key: string]: CodeGenType };
  relations?: undefined | CodeGenRelationType[];
  reference: CodeGenReferenceType;
};
export type CodeGenOmitType = {
  type: "omit";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: { allowNull: boolean };
  internalSettings: {};
  keys: string[];
  reference: CodeGenType;
};
export type CodeGenPickType = {
  type: "pick";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: { allowNull: boolean };
  internalSettings: {};
  keys: string[];
  reference: CodeGenType;
};
export type CodeGenCrudType = {
  type: "crud";
  docString: string;
  isOptional: boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | { primary: boolean; searchable: boolean; hasDefaultValue: boolean };
  validator: {};
  internalSettings: {
    usedRelation?: undefined | CodeGenRelationType;
    parent?: undefined | CodeGenCrudType;
    writeableTypeName?: undefined | string;
    primaryKey?: undefined | { key: string; field: CodeGenType };
  };
  basePath?: undefined | string;
  entity?: undefined | CodeGenType;
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
  inlineRelations: CodeGenCrudType[];
  nestedRelations: CodeGenCrudType[];
};
export type CodeGenCollectableError = { errorString: string };
export type CodeGenContext = {
  options: import("../../App").GenerateOpts;
  structure: CodeGenStructure;
  extension: ".js" | ".ts";
  importExtension: string;
  outputFiles: CodeGenFile[];
  errors: CodeGenCollectableError[];
};
export type CodeGenStructure = {
  [key: CodeGenNamePart]: { [key: CodeGenNamePart]: CodeGenType };
};
export type CodeGenNamePart = string;
export type CodeGenFile = { relativePath: string; contents: string };
export type CodeGenTemplateState = { phase: "init" | "collect" | "finish" };
export type CodeGenTypeSettings = {
  isJSON?: undefined | boolean;
  useDefaults?: undefined | boolean;
  useTypescript?: undefined | boolean;
  isNode?: undefined | boolean;
  isBrowser?: undefined | boolean;
  suffix?: undefined | string;
  isCommonFile?: undefined | boolean;
  isTypeFile?: undefined | boolean;
  fileTypeIO?: undefined | "input" | "outputRouter" | "outputClient";
};
export type CodeGenAnyOfTypeInput = {
  type: "anyOf";
  docString?: undefined | string;
  isOptional?: undefined | boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | {
        primary?: undefined | boolean;
        searchable?: undefined | boolean;
        hasDefaultValue?: undefined | boolean;
      };
  validator?: undefined | {};
  internalSettings?: undefined | {};
  values: import("./../common/types").CodeGenTypeInput[];
};
export type CodeGenTypeInput =
  | import("./../common/types").CodeGenAnyTypeInput
  | import("./../common/types").CodeGenAnyOfTypeInput
  | import("./../common/types").CodeGenArrayTypeInput
  | import("./../common/types").CodeGenBooleanTypeInput
  | import("./../common/types").CodeGenDateTypeInput
  | import("./../common/types").CodeGenFileTypeInput
  | import("./../common/types").CodeGenGenericTypeInput
  | import("./../common/types").CodeGenNumberTypeInput
  | import("./../common/types").CodeGenObjectTypeInput
  | import("./../common/types").CodeGenReferenceTypeInput
  | import("./../common/types").CodeGenStringTypeInput
  | import("./../common/types").CodeGenUuidTypeInput
  | import("./../common/types").CodeGenRouteTypeInput
  | import("./../common/types").CodeGenExtendTypeInput
  | import("./../common/types").CodeGenOmitTypeInput
  | import("./../common/types").CodeGenPickTypeInput
  | import("./../common/types").CodeGenCrudTypeInput;
export type CodeGenAnyTypeInput = {
  type: "any";
  docString?: undefined | string;
  isOptional?: undefined | boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | {
        primary?: undefined | boolean;
        searchable?: undefined | boolean;
        hasDefaultValue?: undefined | boolean;
      };
  validator?: undefined | { allowNull?: undefined | boolean };
  internalSettings?: undefined | {};
  rawValue?: undefined | string;
  rawValueImport?:
    | undefined
    | { javaScript?: undefined | string; typeScript?: undefined | string };
  rawValidator?: undefined | string;
  rawValidatorImport?:
    | undefined
    | { javaScript?: undefined | string; typeScript?: undefined | string };
};
export type CodeGenArrayTypeInput = {
  type: "array";
  docString?: undefined | string;
  isOptional?: undefined | boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | {
        primary?: undefined | boolean;
        searchable?: undefined | boolean;
        hasDefaultValue?: undefined | boolean;
      };
  validator: {
    convert?: undefined | boolean;
    min?: undefined | number;
    max?: undefined | number;
  };
  internalSettings?: undefined | {};
  values: import("./../common/types").CodeGenTypeInput;
};
export type CodeGenBooleanTypeInput = {
  type: "boolean";
  docString?: undefined | string;
  isOptional?: undefined | boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | {
        primary?: undefined | boolean;
        searchable?: undefined | boolean;
        hasDefaultValue?: undefined | boolean;
      };
  validator: { convert?: undefined | boolean; allowNull?: undefined | boolean };
  internalSettings?: undefined | {};
  oneOf?: undefined | boolean;
};
export type CodeGenDateTypeInput = {
  type: "date";
  docString?: undefined | string;
  isOptional?: undefined | boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | {
        primary?: undefined | boolean;
        searchable?: undefined | boolean;
        hasDefaultValue?: undefined | boolean;
      };
  validator?:
    | undefined
    | {
        allowNull?: undefined | boolean;
        min?: undefined | Date;
        max?: undefined | Date;
        inFuture?: undefined | boolean;
        inPast?: undefined | boolean;
      };
  internalSettings?: undefined | {};
  specifier?: undefined | "dateOnly" | "timeOnly";
};
export type CodeGenFileTypeInput = {
  type: "file";
  docString?: undefined | string;
  isOptional?: undefined | boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | {
        primary?: undefined | boolean;
        searchable?: undefined | boolean;
        hasDefaultValue?: undefined | boolean;
      };
  validator?: undefined | { mimeTypes?: undefined | string[] };
  internalSettings?: undefined | {};
};
export type CodeGenGenericTypeInput = {
  type: "generic";
  docString?: undefined | string;
  isOptional?: undefined | boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | {
        primary?: undefined | boolean;
        searchable?: undefined | boolean;
        hasDefaultValue?: undefined | boolean;
      };
  validator?: undefined | {};
  internalSettings?: undefined | {};
  keys: import("./../common/types").CodeGenTypeInput;
  values: import("./../common/types").CodeGenTypeInput;
};
export type CodeGenNumberTypeInput = {
  type: "number";
  docString?: undefined | string;
  isOptional?: undefined | boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | {
        primary?: undefined | boolean;
        searchable?: undefined | boolean;
        hasDefaultValue?: undefined | boolean;
      };
  validator: {
    convert?: undefined | boolean;
    floatingPoint?: undefined | boolean;
    min?: undefined | number;
    max?: undefined | number;
    allowNull?: undefined | boolean;
  };
  internalSettings?: undefined | {};
  oneOf?: undefined | number[];
};
export type CodeGenObjectTypeInput = {
  type: "object";
  docString?: undefined | string;
  isOptional?: undefined | boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | {
        primary?: undefined | boolean;
        searchable?: undefined | boolean;
        hasDefaultValue?: undefined | boolean;
      };
  validator: { allowNull?: undefined | boolean; strict?: undefined | boolean };
  internalSettings?: undefined | {};
  shortName?: undefined | string;
  keys: { [key: string]: import("./../common/types").CodeGenTypeInput };
  enableQueries?: undefined | boolean;
  queryOptions?:
    | undefined
    | {
        withSoftDeletes?: undefined | boolean;
        withDates?: undefined | boolean;
        withPrimaryKey?: undefined | boolean;
        isView?: undefined | boolean;
        schema?: undefined | string;
      };
  relations?:
    | undefined
    | import("./../common/types").CodeGenRelationTypeInput[];
  where?:
    | undefined
    | {
        type: string;
        rawType: import("./../common/types").CodeGenObjectTypeInput;
        fields: {
          key: string;
          name: string;
          isRelation?: undefined | boolean;
          variant:
            | "equal"
            | "notEqual"
            | "in"
            | "notIn"
            | "greaterThan"
            | "lowerThan"
            | "isNull"
            | "isNotNull"
            | "includeNotNull"
            | "like"
            | "iLike"
            | "notLike"
            | "exists"
            | "notExists";
        }[];
      };
  orderBy?:
    | undefined
    | {
        type: string;
        specType: string;
        fields: { key: string; optional: boolean }[];
      };
  partial?:
    | undefined
    | {
        insertType: string;
        updateType: string;
        fields: {
          key: string;
          defaultValue?: undefined | string;
          hasSqlDefault?: undefined | boolean;
          isJsonb?: undefined | boolean;
        }[];
      };
};
export type CodeGenRelationTypeInput = {
  type: "relation";
  subType: "manyToOne" | "oneToMany" | "oneToOne" | "oneToOneReverse";
  reference: import("./../common/types").CodeGenReferenceTypeInput;
  ownKey: string;
  referencedKey?: undefined | string;
  isOptional?: undefined | boolean;
};
export type CodeGenReferenceTypeInput = {
  type: "reference";
  docString?: undefined | string;
  isOptional?: undefined | boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | {
        primary?: undefined | boolean;
        searchable?: undefined | boolean;
        hasDefaultValue?: undefined | boolean;
      };
  validator?: undefined | {};
  internalSettings?: undefined | {};
  reference:
    | import("./../common/types").CodeGenTypeInput
    | {
        group?: undefined | string;
        name?: undefined | string;
        uniqueName?: undefined | string;
      };
};
export type CodeGenStringTypeInput = {
  type: "string";
  docString?: undefined | string;
  isOptional?: undefined | boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | {
        primary?: undefined | boolean;
        searchable?: undefined | boolean;
        hasDefaultValue?: undefined | boolean;
      };
  validator: {
    convert?: undefined | boolean;
    trim?: undefined | boolean;
    lowerCase?: undefined | boolean;
    upperCase?: undefined | boolean;
    min?: undefined | number;
    max?: undefined | number;
    pattern?: undefined | string;
    allowNull?: undefined | boolean;
    disallowedCharacters?: undefined | string[];
  };
  internalSettings?: undefined | {};
  oneOf?: undefined | string[];
};
export type CodeGenUuidTypeInput = {
  type: "uuid";
  docString?: undefined | string;
  isOptional?: undefined | boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | {
        primary?: undefined | boolean;
        searchable?: undefined | boolean;
        hasDefaultValue?: undefined | boolean;
      };
  validator?: undefined | { allowNull?: undefined | boolean };
  internalSettings?: undefined | {};
};
export type CodeGenRouteTypeInput = {
  type: "route";
  docString?: undefined | string;
  isOptional?: undefined | boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | {
        primary?: undefined | boolean;
        searchable?: undefined | boolean;
        hasDefaultValue?: undefined | boolean;
      };
  validator?: undefined | {};
  internalSettings?:
    | undefined
    | {
        stripTrailingSlash?: undefined | boolean;
        requestBodyType?: undefined | "json" | "form-data";
      };
  method: "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "PATCH";
  idempotent?: undefined | boolean;
  path: string;
  tags: string[];
  query?: undefined | import("./../common/types").CodeGenTypeInput;
  params?: undefined | import("./../common/types").CodeGenTypeInput;
  body?: undefined | import("./../common/types").CodeGenTypeInput;
  files?: undefined | import("./../common/types").CodeGenTypeInput;
  response?: undefined | import("./../common/types").CodeGenTypeInput;
  invalidations?:
    | undefined
    | import("./../common/types").CodeGenRouteInvalidationTypeInput[];
};
export type CodeGenRouteInvalidationTypeInput = {
  type: "routeInvalidation";
  target: { group: string; name?: undefined | string };
  properties: {
    useSharedParams?: undefined | boolean;
    useSharedQuery?: undefined | boolean;
    specification?:
      | undefined
      | {
          params?: undefined | { [key: string]: string[] };
          query?: undefined | { [key: string]: string[] };
        };
  };
};
export type CodeGenExtendTypeInput = {
  type: "extend";
  docString?: undefined | string;
  isOptional?: undefined | boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | {
        primary?: undefined | boolean;
        searchable?: undefined | boolean;
        hasDefaultValue?: undefined | boolean;
      };
  validator?: undefined | {};
  internalSettings?: undefined | {};
  keys: { [key: string]: import("./../common/types").CodeGenTypeInput };
  relations?:
    | undefined
    | import("./../common/types").CodeGenRelationTypeInput[];
  reference: import("./../common/types").CodeGenReferenceTypeInput;
};
export type CodeGenOmitTypeInput = {
  type: "omit";
  docString?: undefined | string;
  isOptional?: undefined | boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | {
        primary?: undefined | boolean;
        searchable?: undefined | boolean;
        hasDefaultValue?: undefined | boolean;
      };
  validator: { allowNull?: undefined | boolean };
  internalSettings?: undefined | {};
  keys: string[];
  reference: import("./../common/types").CodeGenTypeInput;
};
export type CodeGenPickTypeInput = {
  type: "pick";
  docString?: undefined | string;
  isOptional?: undefined | boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | {
        primary?: undefined | boolean;
        searchable?: undefined | boolean;
        hasDefaultValue?: undefined | boolean;
      };
  validator: { allowNull?: undefined | boolean };
  internalSettings?: undefined | {};
  keys: string[];
  reference: import("./../common/types").CodeGenTypeInput;
};
export type CodeGenCrudTypeInput = {
  type: "crud";
  docString?: undefined | string;
  isOptional?: undefined | boolean;
  defaultValue?: undefined | string | boolean | number;
  uniqueName?: undefined | string;
  group?: undefined | string;
  name?: undefined | string;
  sql?:
    | undefined
    | {
        primary?: undefined | boolean;
        searchable?: undefined | boolean;
        hasDefaultValue?: undefined | boolean;
      };
  validator?: undefined | {};
  internalSettings?:
    | undefined
    | {
        usedRelation?:
          | undefined
          | import("./../common/types").CodeGenRelationTypeInput;
        parent?: undefined | import("./../common/types").CodeGenCrudTypeInput;
        writeableTypeName?: undefined | string;
        primaryKey?:
          | undefined
          | {
              key: string;
              field: import("./../common/types").CodeGenTypeInput;
            };
      };
  basePath?: undefined | string;
  entity?: undefined | import("./../common/types").CodeGenTypeInput;
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
  inlineRelations: import("./../common/types").CodeGenCrudTypeInput[];
  nestedRelations: import("./../common/types").CodeGenCrudTypeInput[];
};
export type CodeGenCollectableErrorInput = CodeGenCollectableError;
export type CodeGenContextInput = {
  options: import("../../App").GenerateOpts;
  structure: import("./../common/types").CodeGenStructureInput;
  extension: ".js" | ".ts";
  importExtension: string;
  outputFiles: import("./../common/types").CodeGenFileInput[];
  errors: import("./../common/types").CodeGenCollectableErrorInput[];
};
export type CodeGenStructureInput = {
  [key: import("./../common/types").CodeGenNamePartInput]: {
    [
      key: import("./../common/types").CodeGenNamePartInput
    ]: import("./../common/types").CodeGenTypeInput;
  };
};
export type CodeGenNamePartInput = CodeGenNamePart;
export type CodeGenFileInput = CodeGenFile;
export type CodeGenTemplateStateInput = CodeGenTemplateState;
export type CodeGenTypeSettingsInput = CodeGenTypeSettings;
