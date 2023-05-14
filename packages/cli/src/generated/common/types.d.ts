// Generated by @compas/code-gen

export type CliFlagDefinition = {
  name: string;
  rawName: string;
  description?: string | undefined;
  modifiers: {
    isRepeatable: boolean;
    isRequired: boolean;
    isInternal: boolean;
  };
  value: {
    specification: "boolean" | "number" | "string" | "booleanOrString";
    validator?:
      | ((
          value: any,
        ) =>
          | { isValid: boolean; error?: { message: string } }
          | Promise<{ isValid: boolean; error?: { message: string } }>)
      | undefined;
    completions?:
      | (() =>
          | Promise<{ completions: CliCompletion[] }>
          | { completions: CliCompletion[] })
      | undefined;
  };
};

export type CliCommandDefinition = {
  name: string;
  shortDescription: string;
  longDescription?: string | undefined;
  modifiers: {
    isDynamic: boolean;
    isCosmetic: boolean;
    isWatchable: boolean;
  };
  dynamicValue: {
    validator?:
      | ((
          value: string,
        ) =>
          | { isValid: boolean; error?: { message: string } }
          | Promise<{ isValid: boolean; error?: { message: string } }>)
      | undefined;
    completions?:
      | (() =>
          | Promise<{ completions: CliCompletion[] }>
          | { completions: CliCompletion[] })
      | undefined;
  };
  watchSettings: {
    extensions: string[];
    ignorePatterns: string[];
  };
  subCommands: CliCommandDefinition[];
  flags: CliFlagDefinition[];
  executor?:
    | ((
        logger: import("@compas/stdlib").Logger,
        state: import("../../cli/types").CliExecutorState,
      ) => Promise<import("../../cli/types").CliResult> | CliResult)
    | undefined;
};

export type CliFlagDefinitionInput = {
  name: string;
  rawName: string;
  description?: string | undefined;
  modifiers?:
    | {
        isRepeatable?: boolean | "true" | "false" | undefined;
        isRequired?: boolean | "true" | "false" | undefined;
        isInternal?: boolean | "true" | "false" | undefined;
      }
    | undefined;
  value?:
    | {
        specification?:
          | "boolean"
          | "number"
          | "string"
          | "booleanOrString"
          | undefined;
        validator?:
          | ((
              value: any,
            ) =>
              | { isValid: boolean; error?: { message: string } }
              | Promise<{ isValid: boolean; error?: { message: string } }>)
          | undefined;
        completions?:
          | (() =>
              | Promise<{ completions: CliCompletion[] }>
              | { completions: CliCompletion[] })
          | undefined;
      }
    | undefined;
};

export type CliCommandDefinitionInput = {
  name: string;
  shortDescription: string;
  longDescription?: string | undefined;
  modifiers?:
    | {
        isDynamic?: boolean | "true" | "false" | undefined;
        isCosmetic?: boolean | "true" | "false" | undefined;
        isWatchable?: boolean | "true" | "false" | undefined;
      }
    | undefined;
  dynamicValue?:
    | {
        validator?:
          | ((
              value: string,
            ) =>
              | { isValid: boolean; error?: { message: string } }
              | Promise<{ isValid: boolean; error?: { message: string } }>)
          | undefined;
        completions?:
          | (() =>
              | Promise<{ completions: CliCompletion[] }>
              | { completions: CliCompletion[] })
          | undefined;
      }
    | undefined;
  watchSettings?:
    | {
        extensions?: string[] | undefined;
        ignorePatterns?: string[] | undefined;
      }
    | undefined;
  subCommands?: CliCommandDefinitionInput[] | undefined;
  flags?: CliFlagDefinitionInput[] | undefined;
  executor?:
    | ((
        logger: import("@compas/stdlib").Logger,
        state: import("../../cli/types").CliExecutorState,
      ) => Promise<import("../../cli/types").CliResult> | CliResult)
    | undefined;
};

export type CliCompletion =
  | {
      type: "directory";
    }
  | {
      type: "file";
    }
  | {
      type: "completion";
      name: string;
      description?: string | undefined;
    }
  | {
      type: "value";
      specification: "boolean" | "number" | "string" | "booleanOrString";
      description?: string | undefined;
    };
