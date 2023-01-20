// Generated by @compas/code-gen

export type ExperimentalAnyDefinition = {
  type: "any";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean;
  defaultValue?: string | boolean | number | undefined;
  sql: {
    primary?: boolean | undefined;
    searchable?: boolean | undefined;
    hasDefaultValue?: boolean | undefined;
  };
  validator: {
    allowNull: boolean;
  };
  rawValue?: string | undefined;
  rawValueImport: {
    javaScript?: string | undefined;
    typeScript?: string | undefined;
  };
  rawValidator?: string | undefined;
  rawValidatorImport: {
    javaScript?: string | undefined;
    typeScript?: string | undefined;
  };
};

export type ExperimentalAnyDefinitionInput = {
  type: "any";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean | "true" | "false";
  defaultValue?: string | boolean | "true" | "false" | number | undefined;
  sql: {
    primary?: boolean | "true" | "false" | undefined;
    searchable?: boolean | "true" | "false" | undefined;
    hasDefaultValue?: boolean | "true" | "false" | undefined;
  };
  validator: {
    allowNull: boolean | "true" | "false";
  };
  rawValue?: string | undefined;
  rawValueImport: {
    javaScript?: string | undefined;
    typeScript?: string | undefined;
  };
  rawValidator?: string | undefined;
  rawValidatorImport: {
    javaScript?: string | undefined;
    typeScript?: string | undefined;
  };
};

export type ExperimentalArrayDefinition = {
  type: "array";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean;
  defaultValue?: string | boolean | number | undefined;
  sql: {
    primary?: boolean | undefined;
    searchable?: boolean | undefined;
    hasDefaultValue?: boolean | undefined;
  };
  validator: {
    convert: boolean;
    min?: number | undefined;
    max?: number | undefined;
  };
  values: ExperimentalTypeSystemDefinition;
};

export type ExperimentalBooleanDefinition = {
  type: "boolean";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean;
  defaultValue?: string | boolean | number | undefined;
  sql: {
    primary?: boolean | undefined;
    searchable?: boolean | undefined;
    hasDefaultValue?: boolean | undefined;
  };
  validator: {
    convert: boolean;
    allowNull: boolean;
  };
  oneOf?: boolean | undefined;
};

export type ExperimentalNamePart = string;

export type ExperimentalReferenceDefinition = {
  type: "reference";
  docString: string;
  isOptional: boolean;
  defaultValue?: string | boolean | number | undefined;
  sql: {
    primary?: boolean | undefined;
    searchable?: boolean | undefined;
    hasDefaultValue?: boolean | undefined;
  };
  validator: {};
  reference: {
    group: ExperimentalNamePart;
    name: ExperimentalNamePart;
  };
};

export type ExperimentalCrudDefinition = {
  type: "crud";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean;
  defaultValue?: string | boolean | number | undefined;
  sql: {
    primary?: boolean | undefined;
    searchable?: boolean | undefined;
    hasDefaultValue?: boolean | undefined;
  };
  validator: {};
  basePath?: string | undefined;
  entity?: ExperimentalReferenceDefinition | undefined;
  fromParent?:
    | {
        field: string;
        options?:
          | {
              name?: string | undefined;
            }
          | undefined;
      }
    | undefined;
  routeOptions: {
    listRoute?: boolean | undefined;
    singleRoute?: boolean | undefined;
    createRoute?: boolean | undefined;
    updateRoute?: boolean | undefined;
    deleteRoute?: boolean | undefined;
  };
  fieldOptions: {
    readable?:
      | {
          $omit?: string[] | undefined;
          $pick?: string[] | undefined;
        }
      | undefined;
    writable?:
      | {
          $omit?: string[] | undefined;
          $pick?: string[] | undefined;
        }
      | undefined;
  };
  inlineRelations: ExperimentalCrudDefinition[];
  nestedRelations: ExperimentalCrudDefinition[];
};

export type ExperimentalDateDefinition = {
  type: "date";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean;
  defaultValue?: string | boolean | number | undefined;
  sql: {
    primary?: boolean | undefined;
    searchable?: boolean | undefined;
    hasDefaultValue?: boolean | undefined;
  };
  validator: {
    allowNull: boolean;
    min?: Date | undefined;
    max?: Date | undefined;
    inFuture?: boolean | undefined;
    inPast?: boolean | undefined;
  };
  specifier?: "dateOnly" | "timeOnly" | undefined;
};

export type ExperimentalExtendDefinition = {
  type: "extend";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean;
  defaultValue?: string | boolean | number | undefined;
  sql: {
    primary?: boolean | undefined;
    searchable?: boolean | undefined;
    hasDefaultValue?: boolean | undefined;
  };
  validator: {};
  keys: Record<string, ExperimentalTypeSystemDefinition>;
  reference: ExperimentalReferenceDefinition;
};

export type ExperimentalFileDefinition = {
  type: "file";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean;
  defaultValue?: string | boolean | number | undefined;
  sql: {
    primary?: boolean | undefined;
    searchable?: boolean | undefined;
    hasDefaultValue?: boolean | undefined;
  };
  validator: {
    mimeTypes?: string[] | undefined;
  };
};

export type ExperimentalGenericDefinition = {
  type: "generic";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean;
  defaultValue?: string | boolean | number | undefined;
  sql: {
    primary?: boolean | undefined;
    searchable?: boolean | undefined;
    hasDefaultValue?: boolean | undefined;
  };
  validator: {};
  keys: ExperimentalTypeSystemDefinition;
  values: ExperimentalTypeSystemDefinition;
};

export type ExperimentalNumberDefinition = {
  type: "number";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean;
  defaultValue?: string | boolean | number | undefined;
  sql: {
    primary?: boolean | undefined;
    searchable?: boolean | undefined;
    hasDefaultValue?: boolean | undefined;
  };
  validator: {
    convert: boolean;
    floatingPoint: boolean;
    min?: number | undefined;
    max?: number | undefined;
    allowNull: boolean;
  };
  oneOf?: number[] | undefined;
};

export type ExperimentalRelationDefinition = {
  type: "relation";
  subType: "manyToOne" | "oneToMany" | "oneToOne" | "oneToOneReverse";
  reference: ExperimentalReferenceDefinition;
  ownKey: string;
  referencedKey?: string | undefined;
  isOptional: boolean;
};

export type ExperimentalObjectDefinition = {
  type: "object";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean;
  defaultValue?: string | boolean | number | undefined;
  sql: {
    primary?: boolean | undefined;
    searchable?: boolean | undefined;
    hasDefaultValue?: boolean | undefined;
  };
  validator: {
    allowNull: boolean;
    strict: boolean;
  };
  shortName?: string | undefined;
  keys: Record<string, ExperimentalTypeSystemDefinition>;
  enableQueries?: boolean | undefined;
  queryOptions?:
    | {
        withSoftDeletes?: boolean | undefined;
        withDates?: boolean | undefined;
        withPrimaryKey: boolean;
        isView?: boolean | undefined;
        schema?: string | undefined;
      }
    | undefined;
  relations: ExperimentalRelationDefinition[];
};

export type ExperimentalOmitDefinition = {
  type: "omit";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean;
  defaultValue?: string | boolean | number | undefined;
  sql: {
    primary?: boolean | undefined;
    searchable?: boolean | undefined;
    hasDefaultValue?: boolean | undefined;
  };
  validator: {
    allowNull: boolean;
    strict: boolean;
  };
  keys: string[];
  reference: ExperimentalTypeSystemDefinition;
};

export type ExperimentalPickDefinition = {
  type: "pick";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean;
  defaultValue?: string | boolean | number | undefined;
  sql: {
    primary?: boolean | undefined;
    searchable?: boolean | undefined;
    hasDefaultValue?: boolean | undefined;
  };
  validator: {
    allowNull: boolean;
    strict: boolean;
  };
  keys: string[];
  reference: ExperimentalTypeSystemDefinition;
};

export type ExperimentalStringDefinition = {
  type: "string";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean;
  defaultValue?: string | boolean | number | undefined;
  sql: {
    primary?: boolean | undefined;
    searchable?: boolean | undefined;
    hasDefaultValue?: boolean | undefined;
  };
  validator: {
    convert: boolean;
    trim: boolean;
    lowerCase: boolean;
    upperCase: boolean;
    min: number;
    max?: number | undefined;
    pattern?: string | undefined;
    allowNull: boolean;
    disallowedCharacters?: string[] | undefined;
  };
  oneOf?: string[] | undefined;
};

export type ExperimentalUuidDefinition = {
  type: "uuid";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean;
  defaultValue?: string | boolean | number | undefined;
  sql: {
    primary?: boolean | undefined;
    searchable?: boolean | undefined;
    hasDefaultValue?: boolean | undefined;
  };
  validator: {
    allowNull: boolean;
  };
};

// All type definitions that can be used inside other types, like object keys.
export type ExperimentalTypeSystemDefinition =
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
  | ExperimentalReferenceDefinition
  | ExperimentalStringDefinition
  | ExperimentalUuidDefinition;

export type ExperimentalAnyOfDefinition = {
  type: "anyOf";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean;
  defaultValue?: string | boolean | number | undefined;
  sql: {
    primary?: boolean | undefined;
    searchable?: boolean | undefined;
    hasDefaultValue?: boolean | undefined;
  };
  validator: {};
  values: ExperimentalTypeSystemDefinition[];
};

export type ExperimentalArrayDefinitionInput = {
  type: "array";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean | "true" | "false";
  defaultValue?: string | boolean | "true" | "false" | number | undefined;
  sql: {
    primary?: boolean | "true" | "false" | undefined;
    searchable?: boolean | "true" | "false" | undefined;
    hasDefaultValue?: boolean | "true" | "false" | undefined;
  };
  validator: {
    convert: boolean | "true" | "false";
    min?: number | undefined;
    max?: number | undefined;
  };
  values: ExperimentalTypeSystemDefinitionInput;
};

export type ExperimentalBooleanDefinitionInput = {
  type: "boolean";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean | "true" | "false";
  defaultValue?: string | boolean | "true" | "false" | number | undefined;
  sql: {
    primary?: boolean | "true" | "false" | undefined;
    searchable?: boolean | "true" | "false" | undefined;
    hasDefaultValue?: boolean | "true" | "false" | undefined;
  };
  validator: {
    convert: boolean | "true" | "false";
    allowNull: boolean | "true" | "false";
  };
  oneOf?: boolean | "true" | "false" | undefined;
};

export type ExperimentalNamePartInput = string;

export type ExperimentalReferenceDefinitionInput = {
  type: "reference";
  docString: string;
  isOptional: boolean | "true" | "false";
  defaultValue?: string | boolean | "true" | "false" | number | undefined;
  sql: {
    primary?: boolean | "true" | "false" | undefined;
    searchable?: boolean | "true" | "false" | undefined;
    hasDefaultValue?: boolean | "true" | "false" | undefined;
  };
  validator: {};
  reference: {
    group: ExperimentalNamePartInput;
    name: ExperimentalNamePartInput;
  };
};

export type ExperimentalCrudDefinitionInput = {
  type: "crud";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean | "true" | "false";
  defaultValue?: string | boolean | "true" | "false" | number | undefined;
  sql: {
    primary?: boolean | "true" | "false" | undefined;
    searchable?: boolean | "true" | "false" | undefined;
    hasDefaultValue?: boolean | "true" | "false" | undefined;
  };
  validator: {};
  basePath?: string | undefined;
  entity?: ExperimentalReferenceDefinitionInput | undefined;
  fromParent?:
    | {
        field: string;
        options?:
          | {
              name?: string | undefined;
            }
          | undefined;
      }
    | undefined;
  routeOptions: {
    listRoute?: boolean | "true" | "false" | undefined;
    singleRoute?: boolean | "true" | "false" | undefined;
    createRoute?: boolean | "true" | "false" | undefined;
    updateRoute?: boolean | "true" | "false" | undefined;
    deleteRoute?: boolean | "true" | "false" | undefined;
  };
  fieldOptions: {
    readable?:
      | {
          $omit?: string[] | string | undefined;
          $pick?: string[] | string | undefined;
        }
      | undefined;
    writable?:
      | {
          $omit?: string[] | string | undefined;
          $pick?: string[] | string | undefined;
        }
      | undefined;
  };
  inlineRelations:
    | ExperimentalCrudDefinitionInput[]
    | ExperimentalCrudDefinitionInput;
  nestedRelations:
    | ExperimentalCrudDefinitionInput[]
    | ExperimentalCrudDefinitionInput;
};

export type ExperimentalDateDefinitionInput = {
  type: "date";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean | "true" | "false";
  defaultValue?: string | boolean | "true" | "false" | number | undefined;
  sql: {
    primary?: boolean | "true" | "false" | undefined;
    searchable?: boolean | "true" | "false" | undefined;
    hasDefaultValue?: boolean | "true" | "false" | undefined;
  };
  validator: {
    allowNull: boolean | "true" | "false";
    min?: Date | string | number | undefined;
    max?: Date | string | number | undefined;
    inFuture?: boolean | "true" | "false" | undefined;
    inPast?: boolean | "true" | "false" | undefined;
  };
  specifier?: "dateOnly" | "timeOnly" | undefined;
};

export type ExperimentalExtendDefinitionInput = {
  type: "extend";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean | "true" | "false";
  defaultValue?: string | boolean | "true" | "false" | number | undefined;
  sql: {
    primary?: boolean | "true" | "false" | undefined;
    searchable?: boolean | "true" | "false" | undefined;
    hasDefaultValue?: boolean | "true" | "false" | undefined;
  };
  validator: {};
  keys: Record<string, ExperimentalTypeSystemDefinitionInput>;
  reference: ExperimentalReferenceDefinitionInput;
};

export type ExperimentalFileDefinitionInput = {
  type: "file";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean | "true" | "false";
  defaultValue?: string | boolean | "true" | "false" | number | undefined;
  sql: {
    primary?: boolean | "true" | "false" | undefined;
    searchable?: boolean | "true" | "false" | undefined;
    hasDefaultValue?: boolean | "true" | "false" | undefined;
  };
  validator: {
    mimeTypes?: string[] | string | undefined;
  };
};

export type ExperimentalGenericDefinitionInput = {
  type: "generic";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean | "true" | "false";
  defaultValue?: string | boolean | "true" | "false" | number | undefined;
  sql: {
    primary?: boolean | "true" | "false" | undefined;
    searchable?: boolean | "true" | "false" | undefined;
    hasDefaultValue?: boolean | "true" | "false" | undefined;
  };
  validator: {};
  keys: ExperimentalTypeSystemDefinitionInput;
  values: ExperimentalTypeSystemDefinitionInput;
};

export type ExperimentalNumberDefinitionInput = {
  type: "number";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean | "true" | "false";
  defaultValue?: string | boolean | "true" | "false" | number | undefined;
  sql: {
    primary?: boolean | "true" | "false" | undefined;
    searchable?: boolean | "true" | "false" | undefined;
    hasDefaultValue?: boolean | "true" | "false" | undefined;
  };
  validator: {
    convert: boolean | "true" | "false";
    floatingPoint: boolean | "true" | "false";
    min?: number | undefined;
    max?: number | undefined;
    allowNull: boolean | "true" | "false";
  };
  oneOf?: number[] | number | undefined;
};

export type ExperimentalRelationDefinitionInput = {
  type: "relation";
  subType: "manyToOne" | "oneToMany" | "oneToOne" | "oneToOneReverse";
  reference: ExperimentalReferenceDefinitionInput;
  ownKey: string;
  referencedKey?: string | undefined;
  isOptional: boolean | "true" | "false";
};

export type ExperimentalObjectDefinitionInput = {
  type: "object";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean | "true" | "false";
  defaultValue?: string | boolean | "true" | "false" | number | undefined;
  sql: {
    primary?: boolean | "true" | "false" | undefined;
    searchable?: boolean | "true" | "false" | undefined;
    hasDefaultValue?: boolean | "true" | "false" | undefined;
  };
  validator: {
    allowNull: boolean | "true" | "false";
    strict: boolean | "true" | "false";
  };
  shortName?: string | undefined;
  keys: Record<string, ExperimentalTypeSystemDefinitionInput>;
  enableQueries?: boolean | "true" | "false" | undefined;
  queryOptions?:
    | {
        withSoftDeletes?: boolean | "true" | "false" | undefined;
        withDates?: boolean | "true" | "false" | undefined;
        withPrimaryKey: boolean | "true" | "false";
        isView?: boolean | "true" | "false" | undefined;
        schema?: string | undefined;
      }
    | undefined;
  relations:
    | ExperimentalRelationDefinitionInput[]
    | ExperimentalRelationDefinitionInput;
};

export type ExperimentalOmitDefinitionInput = {
  type: "omit";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean | "true" | "false";
  defaultValue?: string | boolean | "true" | "false" | number | undefined;
  sql: {
    primary?: boolean | "true" | "false" | undefined;
    searchable?: boolean | "true" | "false" | undefined;
    hasDefaultValue?: boolean | "true" | "false" | undefined;
  };
  validator: {
    allowNull: boolean | "true" | "false";
    strict: boolean | "true" | "false";
  };
  keys: string[] | string;
  reference: ExperimentalTypeSystemDefinitionInput;
};

export type ExperimentalPickDefinitionInput = {
  type: "pick";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean | "true" | "false";
  defaultValue?: string | boolean | "true" | "false" | number | undefined;
  sql: {
    primary?: boolean | "true" | "false" | undefined;
    searchable?: boolean | "true" | "false" | undefined;
    hasDefaultValue?: boolean | "true" | "false" | undefined;
  };
  validator: {
    allowNull: boolean | "true" | "false";
    strict: boolean | "true" | "false";
  };
  keys: string[] | string;
  reference: ExperimentalTypeSystemDefinitionInput;
};

export type ExperimentalStringDefinitionInput = {
  type: "string";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean | "true" | "false";
  defaultValue?: string | boolean | "true" | "false" | number | undefined;
  sql: {
    primary?: boolean | "true" | "false" | undefined;
    searchable?: boolean | "true" | "false" | undefined;
    hasDefaultValue?: boolean | "true" | "false" | undefined;
  };
  validator: {
    convert: boolean | "true" | "false";
    trim: boolean | "true" | "false";
    lowerCase: boolean | "true" | "false";
    upperCase: boolean | "true" | "false";
    min?: number | undefined;
    max?: number | undefined;
    pattern?: string | undefined;
    allowNull: boolean | "true" | "false";
    disallowedCharacters?: string[] | string | undefined;
  };
  oneOf?: string[] | string | undefined;
};

export type ExperimentalUuidDefinitionInput = {
  type: "uuid";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean | "true" | "false";
  defaultValue?: string | boolean | "true" | "false" | number | undefined;
  sql: {
    primary?: boolean | "true" | "false" | undefined;
    searchable?: boolean | "true" | "false" | undefined;
    hasDefaultValue?: boolean | "true" | "false" | undefined;
  };
  validator: {
    allowNull: boolean | "true" | "false";
  };
};

// All type definitions that can be used inside other types, like object keys.
export type ExperimentalTypeSystemDefinitionInput =
  | ExperimentalAnyDefinitionInput
  | ExperimentalAnyOfDefinitionInput
  | ExperimentalArrayDefinitionInput
  | ExperimentalBooleanDefinitionInput
  | ExperimentalCrudDefinitionInput
  | ExperimentalDateDefinitionInput
  | ExperimentalExtendDefinitionInput
  | ExperimentalFileDefinitionInput
  | ExperimentalGenericDefinitionInput
  | ExperimentalNumberDefinitionInput
  | ExperimentalObjectDefinitionInput
  | ExperimentalOmitDefinitionInput
  | ExperimentalPickDefinitionInput
  | ExperimentalReferenceDefinitionInput
  | ExperimentalStringDefinitionInput
  | ExperimentalUuidDefinitionInput;

export type ExperimentalAnyOfDefinitionInput = {
  type: "anyOf";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean | "true" | "false";
  defaultValue?: string | boolean | "true" | "false" | number | undefined;
  sql: {
    primary?: boolean | "true" | "false" | undefined;
    searchable?: boolean | "true" | "false" | undefined;
    hasDefaultValue?: boolean | "true" | "false" | undefined;
  };
  validator: {};
  values:
    | ExperimentalTypeSystemDefinitionInput[]
    | ExperimentalTypeSystemDefinitionInput;
};

export type ExperimentalGenerateOptions = {
  targetLanguage: "js" | "ts";
  outputDirectory?: string | undefined;
  generators: {
    // Enable a structure dump. This way this structure can be reused via 'Generator#addStructure
    structure?: {} | undefined;

    // Enable the OpenAPI generator.
    openApi?:
      | {
          openApiExtensions?: any | undefined;
          openApiRouteExtensions?: any | undefined;
        }
      | undefined;

    // Generate a validating router with entry points for your route handlers.
    router?:
      | {
          // Select one of the supported libraries to generate a router for.
          target: {
            library: "koa";
          };

          // Adds a Compas '_compas/structure.json' route to the generated router that includes all available routes.
          exposeApiStructure: boolean;
        }
      | undefined;

    // Generate one of the compatible database interfaces.
    database?:
      | {
          // Select one of the supported dialects to generate queries for.
          target: {
            dialect: "postgres";
          };

          // Create a markdown file containing the ERD in a 'mermaid' block.
          includeEntityDiagram: boolean;
        }
      | undefined;

    // Alter the output of generated validators. Other generators will always include validators in their output if necessary.
    validators?:
      | {
          // Always generate validators for all named types even if no other generator needs it. This implies {@link ExperimentalGenerateOptions.generators.types.includeBaseTypes}.
          includeBaseTypes: boolean;
        }
      | undefined;

    // Generate an API client, based on the routes in your structure.
    apiClient?:
      | {
          // Select your HTTP client of choice.
          target: {
            library: "axios";
            targetRuntime: "node.js" | "browser" | "react-native";

            // Include an API client wrapper to use the api easier with your user interface library.
            includeWrapper?: "react-query" | undefined;

            // Use a global api client that will be used for all requests. Only applicable when using 'axios'.
            globalClient: boolean;
          };

          // Unsafe skip generating and using validators to automatically validate if the response passes the schema.
          skipResponseValidation: boolean;
        }
      | undefined;

    // Alter the output of the generated types, they are always generated as a result of other enabled generators.
    types?:
      | {
          // Always generate types for all named types even if no other generator needs it.
          includeBaseTypes: boolean;

          // Declare all types in the global namespace. Only applicable when using 'targetLanguage' when set to 'js' or 'ts'.
          declareGlobalTypes: boolean;

          // Creates global types for types provided by Compas features. Only applicable when using 'targetLanguage' that is set to 'js' or 'ts'.
          declareGlobalCompasTypes: boolean;
        }
      | undefined;
  };
};

export type ExperimentalGenerateOptionsInput = {
  targetLanguage: "js" | "ts";
  outputDirectory?: string | undefined;
  generators: {
    // Enable a structure dump. This way this structure can be reused via 'Generator#addStructure
    structure?: {} | undefined;

    // Enable the OpenAPI generator.
    openApi?:
      | {
          openApiExtensions?: any | undefined;
          openApiRouteExtensions?: any | undefined;
        }
      | undefined;

    // Generate a validating router with entry points for your route handlers.
    router?:
      | {
          // Select one of the supported libraries to generate a router for.
          target: {
            library: "koa";
          };

          // Adds a Compas '_compas/structure.json' route to the generated router that includes all available routes.
          exposeApiStructure?: boolean | "true" | "false" | undefined;
        }
      | undefined;

    // Generate one of the compatible database interfaces.
    database?:
      | {
          // Select one of the supported dialects to generate queries for.
          target: {
            dialect: "postgres";
          };

          // Create a markdown file containing the ERD in a 'mermaid' block.
          includeEntityDiagram?: boolean | "true" | "false" | undefined;
        }
      | undefined;

    // Alter the output of generated validators. Other generators will always include validators in their output if necessary.
    validators?:
      | {
          // Always generate validators for all named types even if no other generator needs it. This implies {@link ExperimentalGenerateOptions.generators.types.includeBaseTypes}.
          includeBaseTypes?: boolean | "true" | "false" | undefined;
        }
      | undefined;

    // Generate an API client, based on the routes in your structure.
    apiClient?:
      | {
          // Select your HTTP client of choice.
          target: {
            library: "axios";
            targetRuntime: "node.js" | "browser" | "react-native";

            // Include an API client wrapper to use the api easier with your user interface library.
            includeWrapper?: "react-query" | undefined;

            // Use a global api client that will be used for all requests. Only applicable when using 'axios'.
            globalClient?: boolean | "true" | "false" | undefined;
          };

          // Unsafe skip generating and using validators to automatically validate if the response passes the schema.
          skipResponseValidation?: boolean | "true" | "false" | undefined;
        }
      | undefined;

    // Alter the output of the generated types, they are always generated as a result of other enabled generators.
    types?:
      | {
          // Always generate types for all named types even if no other generator needs it.
          includeBaseTypes?: boolean | "true" | "false" | undefined;

          // Declare all types in the global namespace. Only applicable when using 'targetLanguage' when set to 'js' or 'ts'.
          declareGlobalTypes?: boolean | "true" | "false" | undefined;

          // Creates global types for types provided by Compas features. Only applicable when using 'targetLanguage' that is set to 'js' or 'ts'.
          declareGlobalCompasTypes?: boolean | "true" | "false" | undefined;
        }
      | undefined;
  };
};

export type ExperimentalNamePartOptional = string | undefined;

export type ExperimentalNamePartOptionalInput = string | undefined;

export type ExperimentalRouteInvalidationDefinition = {
  type: "routeInvalidation";
  target: {
    group: ExperimentalNamePart;
    name?: ExperimentalNamePartOptional | undefined;
  };
  properties: {
    useSharedParams?: boolean | undefined;
    useSharedQuery?: boolean | undefined;
    specification?:
      | {
          params: Record<string, string[]>;
          query: Record<string, string[]>;
        }
      | undefined;
  };
};

export type ExperimentalRouteDefinition = {
  type: "route";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean;
  defaultValue?: string | boolean | number | undefined;
  sql: {
    primary?: boolean | undefined;
    searchable?: boolean | undefined;
    hasDefaultValue?: boolean | undefined;
  };
  validator: {};
  method: "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "PATCH";
  idempotent: boolean;
  path: string;
  tags: string[];
  query?: ExperimentalReferenceDefinition | undefined;
  params?: ExperimentalReferenceDefinition | undefined;
  body?: ExperimentalReferenceDefinition | undefined;
  files?: ExperimentalReferenceDefinition | undefined;
  response?: ExperimentalReferenceDefinition | undefined;
  invalidations: ExperimentalRouteInvalidationDefinition[];
  metadata?:
    | {
        stripTrailingSlash?: boolean | undefined;
        requestBodyType?: "json" | "form-data" | undefined;
      }
    | undefined;
};

// This contains all types that can be added top level to the structure.
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

export type ExperimentalRouteInvalidationDefinitionInput = {
  type: "routeInvalidation";
  target: {
    group: ExperimentalNamePartInput;
    name?: ExperimentalNamePartOptionalInput | undefined;
  };
  properties: {
    useSharedParams?: boolean | "true" | "false" | undefined;
    useSharedQuery?: boolean | "true" | "false" | undefined;
    specification?:
      | {
          params: Record<string, string[] | string>;
          query: Record<string, string[] | string>;
        }
      | undefined;
  };
};

export type ExperimentalRouteDefinitionInput = {
  type: "route";
  group?: string | undefined;
  name?: string | undefined;
  docString: string;
  isOptional: boolean | "true" | "false";
  defaultValue?: string | boolean | "true" | "false" | number | undefined;
  sql: {
    primary?: boolean | "true" | "false" | undefined;
    searchable?: boolean | "true" | "false" | undefined;
    hasDefaultValue?: boolean | "true" | "false" | undefined;
  };
  validator: {};
  method: "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "PATCH";
  idempotent: boolean | "true" | "false";
  path: string;
  tags: string[] | string;
  query?: ExperimentalReferenceDefinitionInput | undefined;
  params?: ExperimentalReferenceDefinitionInput | undefined;
  body?: ExperimentalReferenceDefinitionInput | undefined;
  files?: ExperimentalReferenceDefinitionInput | undefined;
  response?: ExperimentalReferenceDefinitionInput | undefined;
  invalidations:
    | ExperimentalRouteInvalidationDefinitionInput[]
    | ExperimentalRouteInvalidationDefinitionInput;
  metadata?:
    | {
        stripTrailingSlash?: boolean | "true" | "false" | undefined;
        requestBodyType?: "json" | "form-data" | undefined;
      }
    | undefined;
};

// This contains all types that can be added top level to the structure.
export type ExperimentalNamedTypeDefinitionInput =
  | ExperimentalAnyDefinitionInput
  | ExperimentalAnyOfDefinitionInput
  | ExperimentalArrayDefinitionInput
  | ExperimentalBooleanDefinitionInput
  | ExperimentalCrudDefinitionInput
  | ExperimentalDateDefinitionInput
  | ExperimentalExtendDefinitionInput
  | ExperimentalFileDefinitionInput
  | ExperimentalGenericDefinitionInput
  | ExperimentalNumberDefinitionInput
  | ExperimentalObjectDefinitionInput
  | ExperimentalOmitDefinitionInput
  | ExperimentalPickDefinitionInput
  | ExperimentalRouteDefinitionInput
  | ExperimentalStringDefinitionInput
  | ExperimentalUuidDefinitionInput;

export type ExperimentalStructure = Record<
  ExperimentalNamePart,
  Record<ExperimentalNamePart, ExperimentalNamedTypeDefinition>
>;

export type ExperimentalStructureInput = Record<
  ExperimentalNamePartInput,
  Record<ExperimentalNamePartInput, ExperimentalNamedTypeDefinitionInput>
>;

// This contains all known type definitions.
export type ExperimentalTypeDefinition =
  | ExperimentalNamedTypeDefinition
  | ExperimentalReferenceDefinition
  | ExperimentalRelationDefinition
  | ExperimentalRouteInvalidationDefinition;

// This contains all known type definitions.
export type ExperimentalTypeDefinitionInput =
  | ExperimentalNamedTypeDefinitionInput
  | ExperimentalReferenceDefinitionInput
  | ExperimentalRelationDefinitionInput
  | ExperimentalRouteInvalidationDefinitionInput;
