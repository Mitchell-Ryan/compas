/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<string>}
 */
export function anonymousValidator141209293(
  value: any,
  propertyPath: string,
): EitherN<string>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<string>}
 */
export function anonymousValidator63970852(
  value: any,
  propertyPath: string,
): EitherN<string>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<undefined|string>}
 */
export function anonymousValidator714133621(
  value: any,
  propertyPath: string,
): EitherN<undefined | string>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<boolean>}
 */
export function anonymousValidator897743470(
  value: any,
  propertyPath: string,
): EitherN<boolean>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<{"isDynamic": boolean, "isCosmetic": boolean, "isWatchable": boolean, }>}
 */
export function anonymousValidator560329661(
  value: any,
  propertyPath: string,
): EitherN<{
  isDynamic: boolean;
  isCosmetic: boolean;
  isWatchable: boolean;
}>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<undefined|((value: string) => { isValid: boolean, error?: { message: string }}|Promise<{ isValid: boolean, error?: { message: string }}>)>}
 */
export function anonymousValidator193358577(
  value: any,
  propertyPath: string,
): EitherN<
  | ((value: string) =>
      | {
          isValid: boolean;
          error?: {
            message: string;
          };
        }
      | Promise<{
          isValid: boolean;
          error?: {
            message: string;
          };
        }>)
  | undefined
>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<undefined|(() => Promise<{ completions: CliCompletion[] }>|{ completions: CliCompletion[] })>}
 */
export function anonymousValidator249660009(
  value: any,
  propertyPath: string,
): EitherN<
  | undefined
  | (() =>
      | Promise<{
          completions: CliCompletion[];
        }>
      | {
          completions: CliCompletion[];
        })
>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<{"validator"?: undefined|((value: string) => { isValid: boolean, error?: { message: string }}|Promise<{ isValid: boolean, error?: { message: string }}>), "completions"?: undefined|(() => Promise<{ completions: CliCompletion[] }>|{ completions: CliCompletion[] }), }>}
 */
export function anonymousValidator695211961(
  value: any,
  propertyPath: string,
): EitherN<{
  validator?:
    | ((value: string) =>
        | {
            isValid: boolean;
            error?: {
              message: string;
            };
          }
        | Promise<{
            isValid: boolean;
            error?: {
              message: string;
            };
          }>)
    | undefined;
  completions?:
    | undefined
    | (() =>
        | Promise<{
            completions: CliCompletion[];
          }>
        | {
            completions: CliCompletion[];
          });
}>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<string>}
 */
export function anonymousValidator1895866002(
  value: any,
  propertyPath: string,
): EitherN<string>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<(string)[]>}
 */
export function anonymousValidator432472698(
  value: any,
  propertyPath: string,
): EitherN<string[]>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<(string)[]>}
 */
export function anonymousValidator56700539(
  value: any,
  propertyPath: string,
): EitherN<string[]>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<{"extensions": (string)[], "ignorePatterns": (string)[], }>}
 */
export function anonymousValidator420227420(
  value: any,
  propertyPath: string,
): EitherN<{
  extensions: string[];
  ignorePatterns: string[];
}>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<(import("./types").CliCommandDefinition)[]>}
 */
export function anonymousValidator1489856765(
  value: any,
  propertyPath: string,
): EitherN<import("./types").CliCommandDefinition[]>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<string>}
 */
export function anonymousValidator1943706623(
  value: any,
  propertyPath: string,
): EitherN<string>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<undefined|string>}
 */
export function anonymousValidator1631421785(
  value: any,
  propertyPath: string,
): EitherN<undefined | string>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<{"isRepeatable": boolean, "isRequired": boolean, "isInternal": boolean, }>}
 */
export function anonymousValidator116853049(
  value: any,
  propertyPath: string,
): EitherN<{
  isRepeatable: boolean;
  isRequired: boolean;
  isInternal: boolean;
}>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<"boolean"|"number"|"string"|"booleanOrString">}
 */
export function anonymousValidator1531300050(
  value: any,
  propertyPath: string,
): EitherN<"boolean" | "number" | "string" | "booleanOrString">;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<undefined|((value: any) => { isValid: boolean, error?: { message: string }}|Promise<{ isValid: boolean, error?: { message: string }}>)>}
 */
export function anonymousValidator126524240(
  value: any,
  propertyPath: string,
): EitherN<
  | ((value: any) =>
      | {
          isValid: boolean;
          error?: {
            message: string;
          };
        }
      | Promise<{
          isValid: boolean;
          error?: {
            message: string;
          };
        }>)
  | undefined
>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<{"specification": "boolean"|"number"|"string"|"booleanOrString", "validator"?: undefined|((value: any) => { isValid: boolean, error?: { message: string }}|Promise<{ isValid: boolean, error?: { message: string }}>), "completions"?: undefined|(() => Promise<{ completions: CliCompletion[] }>|{ completions: CliCompletion[] }), }>}
 */
export function anonymousValidator1708605066(
  value: any,
  propertyPath: string,
): EitherN<{
  specification: "boolean" | "number" | "string" | "booleanOrString";
  validator?:
    | ((value: any) =>
        | {
            isValid: boolean;
            error?: {
              message: string;
            };
          }
        | Promise<{
            isValid: boolean;
            error?: {
              message: string;
            };
          }>)
    | undefined;
  completions?:
    | undefined
    | (() =>
        | Promise<{
            completions: CliCompletion[];
          }>
        | {
            completions: CliCompletion[];
          });
}>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<{"name": string, "rawName": string, "description"?: undefined|string, "modifiers": {"isRepeatable": boolean, "isRequired": boolean, "isInternal": boolean, }, "value": {"specification": "boolean"|"number"|"string"|"booleanOrString", "validator"?: undefined|((value: any) => { isValid: boolean, error?: { message: string }}|Promise<{ isValid: boolean, error?: { message: string }}>), "completions"?: undefined|(() => Promise<{ completions: CliCompletion[] }>|{ completions: CliCompletion[] }), }, }>}
 */
export function anonymousValidator1885876481(
  value: any,
  propertyPath: string,
): EitherN<{
  name: string;
  rawName: string;
  description?: undefined | string;
  modifiers: {
    isRepeatable: boolean;
    isRequired: boolean;
    isInternal: boolean;
  };
  value: {
    specification: "boolean" | "number" | "string" | "booleanOrString";
    validator?:
      | ((value: any) =>
          | {
              isValid: boolean;
              error?: {
                message: string;
              };
            }
          | Promise<{
              isValid: boolean;
              error?: {
                message: string;
              };
            }>)
      | undefined;
    completions?:
      | undefined
      | (() =>
          | Promise<{
              completions: CliCompletion[];
            }>
          | {
              completions: CliCompletion[];
            });
  };
}>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<(import("./types").CliFlagDefinition)[]>}
 */
export function anonymousValidator1259325376(
  value: any,
  propertyPath: string,
): EitherN<import("./types").CliFlagDefinition[]>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<undefined|((logger: import("@compas/stdlib").Logger, state: import("../../cli/types").CliExecutorState) => (Promise<import("../../cli/types").CliResult>|CliResult))>}
 */
export function anonymousValidator779701095(
  value: any,
  propertyPath: string,
): EitherN<
  | ((
      logger: import("@compas/stdlib").Logger,
      state: import("../../cli/types").CliExecutorState,
    ) => Promise<import("../../cli/types").CliResult> | CliResult)
  | undefined
>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<{"name": string, "shortDescription": string, "longDescription"?: undefined|string, "modifiers": {"isDynamic": boolean, "isCosmetic": boolean, "isWatchable": boolean, }, "dynamicValue": {"validator"?: undefined|((value: string) => { isValid: boolean, error?: { message: string }}|Promise<{ isValid: boolean, error?: { message: string }}>), "completions"?: undefined|(() => Promise<{ completions: CliCompletion[] }>|{ completions: CliCompletion[] }), }, "watchSettings": {"extensions": (string)[], "ignorePatterns": (string)[], }, "subCommands": (import("./types").CliCommandDefinition)[], "flags": (import("./types").CliFlagDefinition)[], "executor"?: undefined|((logger: import("@compas/stdlib").Logger, state: import("../../cli/types").CliExecutorState) => (Promise<import("../../cli/types").CliResult>|CliResult)), }>}
 */
export function anonymousValidator1833756126(
  value: any,
  propertyPath: string,
): EitherN<{
  name: string;
  shortDescription: string;
  longDescription?: undefined | string;
  modifiers: {
    isDynamic: boolean;
    isCosmetic: boolean;
    isWatchable: boolean;
  };
  dynamicValue: {
    validator?:
      | ((value: string) =>
          | {
              isValid: boolean;
              error?: {
                message: string;
              };
            }
          | Promise<{
              isValid: boolean;
              error?: {
                message: string;
              };
            }>)
      | undefined;
    completions?:
      | undefined
      | (() =>
          | Promise<{
              completions: CliCompletion[];
            }>
          | {
              completions: CliCompletion[];
            });
  };
  watchSettings: {
    extensions: string[];
    ignorePatterns: string[];
  };
  subCommands: import("./types").CliCommandDefinition[];
  flags: import("./types").CliFlagDefinition[];
  executor?:
    | ((
        logger: import("@compas/stdlib").Logger,
        state: import("../../cli/types").CliExecutorState,
      ) => Promise<import("../../cli/types").CliResult> | CliResult)
    | undefined;
}>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<"directory">}
 */
export function anonymousValidator1082290220(
  value: any,
  propertyPath: string,
): EitherN<"directory">;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<{"type": "directory", }>}
 */
export function anonymousValidator511626507(
  value: any,
  propertyPath: string,
): EitherN<{
  type: "directory";
}>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<"file">}
 */
export function anonymousValidator1328202671(
  value: any,
  propertyPath: string,
): EitherN<"file">;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<{"type": "file", }>}
 */
export function anonymousValidator523135120(
  value: any,
  propertyPath: string,
): EitherN<{
  type: "file";
}>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<"completion">}
 */
export function anonymousValidator1089380721(
  value: any,
  propertyPath: string,
): EitherN<"completion">;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<{"type": "completion", "name": string, "description"?: undefined|string, }>}
 */
export function anonymousValidator2097333630(
  value: any,
  propertyPath: string,
): EitherN<{
  type: "completion";
  name: string;
  description?: undefined | string;
}>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<"value">}
 */
export function anonymousValidator1846391336(
  value: any,
  propertyPath: string,
): EitherN<"value">;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<"boolean"|"number"|"string"|"booleanOrString">}
 */
export function anonymousValidator411885723(
  value: any,
  propertyPath: string,
): EitherN<"boolean" | "number" | "string" | "booleanOrString">;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<{"type": "value", "specification": "boolean"|"number"|"string"|"booleanOrString", "description"?: undefined|string, }>}
 */
export function anonymousValidator291508638(
  value: any,
  propertyPath: string,
): EitherN<{
  type: "value";
  specification: "boolean" | "number" | "string" | "booleanOrString";
  description?: undefined | string;
}>;
/**
 * @param {*} value
 * @param {string} propertyPath
 * @returns {EitherN<{"type": "directory", }|{"type": "file", }|{"type": "completion", "name": string, "description"?: undefined|string, }|{"type": "value", "specification": "boolean"|"number"|"string"|"booleanOrString", "description"?: undefined|string, }>}
 */
export function anonymousValidator328829180(
  value: any,
  propertyPath: string,
): EitherN<
  | {
      type: "directory";
    }
  | {
      type: "file";
    }
  | {
      type: "completion";
      name: string;
      description?: undefined | string;
    }
  | {
      type: "value";
      specification: "boolean" | "number" | "string" | "booleanOrString";
      description?: undefined | string;
    }
>;
export type InternalError = {
  propertyPath: string;
  key: string;
  info: any;
};
export type EitherN<T> = import("@compas/stdlib").EitherN<T, InternalError>;
//# sourceMappingURL=anonymous-validators.d.ts.map
