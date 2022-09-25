// Generated by @compas/code-gen
/* eslint-disable no-unused-vars */

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
export type ExperimentalGenerateOptions = {
  targetLanguage: "js" | "ts";
  targetRuntime?: undefined | "node.js" | "browser" | "react-native";
  outputDirectory?: undefined | string;
  generators: {
    structure?: undefined | {};
    openApi?:
      | undefined
      | {
          openApiExtensions?: undefined | any;
          openApiRouteExtensions?: undefined | any;
        };
    router?: undefined | { targetLibrary: "koa"; exposeApiStructure: boolean };
    database?: undefined | { targetDialect: "postgresql" };
    validators?: undefined | { includeBaseTypes: boolean };
    apiClient?:
      | undefined
      | {
          targetLibrary: "axios";
          validateResponses: boolean;
          globalClient: boolean;
          includeWrapper?: undefined | "react-query";
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
export type ExperimentalNamePart = string;
export type ExperimentalNamedTypeDefinition =
  | ExperimentalBooleanDefinition
  | ExperimentalNumberDefinition;
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
export type ExperimentalStructure = {
  [key: ExperimentalNamePart]: {
    [key: ExperimentalNamePart]: ExperimentalNamedTypeDefinition;
  };
};
export type ExperimentalTypeDefinition =
  | ExperimentalNamedTypeDefinition
  | ExperimentalReferenceDefinition;
export type ExperimentalBooleanDefinitionInput = ExperimentalBooleanDefinition;
export type ExperimentalGenerateOptionsInput = {
  targetLanguage: "js" | "ts";
  targetRuntime?: undefined | "node.js" | "browser" | "react-native";
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
      | { targetLibrary: "koa"; exposeApiStructure?: undefined | boolean };
    database?: undefined | { targetDialect: "postgresql" };
    validators?: undefined | { includeBaseTypes?: undefined | boolean };
    apiClient?:
      | undefined
      | {
          targetLibrary: "axios";
          validateResponses?: undefined | boolean;
          globalClient?: undefined | boolean;
          includeWrapper?: undefined | "react-query";
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
export type ExperimentalNamePartInput = ExperimentalNamePart;
export type ExperimentalNamedTypeDefinitionInput =
  | import("./../common/types").ExperimentalBooleanDefinitionInput
  | import("./../common/types").ExperimentalNumberDefinitionInput;
export type ExperimentalNumberDefinitionInput = ExperimentalNumberDefinition;
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
export type ExperimentalStructureInput = {
  [key: import("./../common/types").ExperimentalNamePartInput]: {
    [
      key: import("./../common/types").ExperimentalNamePartInput
    ]: import("./../common/types").ExperimentalNamedTypeDefinitionInput;
  };
};
export type ExperimentalTypeDefinitionInput =
  | import("./../common/types").ExperimentalNamedTypeDefinitionInput
  | import("./../common/types").ExperimentalReferenceDefinitionInput;
