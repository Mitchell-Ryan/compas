// Generated by @compas/code-gen
/* eslint-disable no-unused-vars */

export const compasGenerateSettings = {
  outputDirectory: "packages/cli/src/generated",
  fileHeader:
    "// Generated by @compas/code-gen\n/* eslint-disable no-unused-vars */\n",
  isBrowser: false,
  isNodeServer: false,
  isNode: true,
  enabledGenerators: ["validator", "type"],
  environment: {},
  useTypescript: false,
  dumpStructure: true,
  dumpApiStructure: false,
  dumpPostgres: false,
  declareGlobalTypes: false,
  enabledGroups: ["cli"],
};
export const cliStructureString =
  '{"completion":{"type":"anyOf","group":"cli","name":"completion","docString":"","isOptional":false,"validator":{},"sql":{},"values":[{"type":"object","docString":"","isOptional":false,"validator":{"allowNull":false,"strict":true},"sql":{},"keys":{"type":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"oneOf":["directory"]}},"relations":[]},{"type":"object","docString":"","isOptional":false,"validator":{"allowNull":false,"strict":true},"sql":{},"keys":{"type":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"oneOf":["file"]}},"relations":[]},{"type":"object","docString":"","isOptional":false,"validator":{"allowNull":false,"strict":true},"sql":{},"keys":{"type":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"oneOf":["completion"]},"name":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}},"description":{"type":"string","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}}},"relations":[]},{"type":"object","docString":"","isOptional":false,"validator":{"allowNull":false,"strict":true},"sql":{},"keys":{"type":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"oneOf":["value"]},"specification":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"oneOf":["boolean","number","string","booleanOrString"]},"description":{"type":"string","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}}},"relations":[]}],"uniqueName":"CliCompletion"},"flagDefinition":{"type":"object","group":"cli","name":"flagDefinition","docString":"","isOptional":false,"validator":{"allowNull":false,"strict":true},"sql":{},"keys":{"name":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}},"rawName":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":true,"upperCase":false,"min":1,"pattern":"/^--\\\\w/g"},"sql":{}},"description":{"type":"string","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1,"pattern":"/^[^\\\\n]+$/g"},"sql":{}},"modifiers":{"type":"object","docString":"","isOptional":true,"defaultValue":"{\\"isRepeatable\\":false,\\"isRequired\\":false,\\"isInternal\\":false}","validator":{"allowNull":false,"strict":true},"sql":{},"keys":{"isRepeatable":{"type":"boolean","docString":"","isOptional":true,"defaultValue":"false","validator":{"convert":false,"allowNull":false},"sql":{}},"isRequired":{"type":"boolean","docString":"","isOptional":true,"defaultValue":"false","validator":{"convert":false,"allowNull":false},"sql":{}},"isInternal":{"type":"boolean","docString":"","isOptional":true,"defaultValue":"false","validator":{"convert":false,"allowNull":false},"sql":{}}},"relations":[]},"value":{"type":"object","docString":"","isOptional":true,"defaultValue":"{\\"specification\\":\\"boolean\\"}","validator":{"allowNull":false,"strict":true},"sql":{},"keys":{"specification":{"type":"string","docString":"","isOptional":true,"defaultValue":"\\"boolean\\"","validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"oneOf":["boolean","number","string","booleanOrString"]},"validator":{"type":"any","docString":"","isOptional":true,"validator":{},"sql":{},"rawValue":"((value: any) => { isValid: boolean, error?: { message: string }}|Promise<{ isValid: boolean, error?: { message: string }}>)","rawValueImport":{},"rawValidator":"((v) => typeof v === \\"function\\")","rawValidatorImport":{}},"completions":{"type":"any","docString":"","isOptional":true,"validator":{},"sql":{},"rawValue":"(() => Promise<{ completions: CliCompletion[] }>|{ completions: CliCompletion[] })","rawValueImport":{},"rawValidator":"((v) => typeof v === \\"function\\")","rawValidatorImport":{}}},"relations":[]}},"relations":[],"uniqueName":"CliFlagDefinition"},"commandDefinition":{"type":"object","group":"cli","name":"commandDefinition","docString":"","isOptional":false,"validator":{"allowNull":false,"strict":true},"sql":{},"keys":{"name":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1,"pattern":"/^[a-z-]+$/g"},"sql":{}},"shortDescription":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1,"pattern":"/^[^\\\\n]+$/g"},"sql":{}},"longDescription":{"type":"string","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}},"modifiers":{"type":"object","docString":"","isOptional":true,"defaultValue":"{\\"isDynamic\\":false,\\"isCosmetic\\":false,\\"isWatchable\\":false}","validator":{"allowNull":false,"strict":true},"sql":{},"keys":{"isDynamic":{"type":"boolean","docString":"","isOptional":true,"defaultValue":"false","validator":{"convert":false,"allowNull":false},"sql":{}},"isCosmetic":{"type":"boolean","docString":"","isOptional":true,"defaultValue":"false","validator":{"convert":false,"allowNull":false},"sql":{}},"isWatchable":{"type":"boolean","docString":"","isOptional":true,"defaultValue":"false","validator":{"convert":false,"allowNull":false},"sql":{}}},"relations":[]},"dynamicValue":{"type":"object","docString":"","isOptional":true,"defaultValue":"{}","validator":{"allowNull":false,"strict":true},"sql":{},"keys":{"validator":{"type":"any","docString":"","isOptional":true,"validator":{},"sql":{},"rawValue":"((value: string) => { isValid: boolean, error?: { message: string }}|Promise<{ isValid: boolean, error?: { message: string }}>)","rawValueImport":{},"rawValidator":"((v) => typeof v === \\"function\\")","rawValidatorImport":{}},"completions":{"type":"any","docString":"","isOptional":true,"validator":{},"sql":{},"rawValue":"(() => Promise<{ completions: CliCompletion[] }>|{ completions: CliCompletion[] })","rawValueImport":{},"rawValidator":"((v) => typeof v === \\"function\\")","rawValidatorImport":{}}},"relations":[]},"watchSettings":{"type":"object","docString":"","isOptional":true,"defaultValue":"{\\"extensions\\":[\\"js\\",\\"json\\"],\\"ignorePatterns\\":[\\".cache\\",\\"coverage\\",\\"node_modules\\"]}","validator":{"allowNull":false,"strict":true},"sql":{},"keys":{"extensions":{"type":"array","docString":"","isOptional":true,"defaultValue":"[\\"js\\", \\"json\\"]","validator":{"convert":false},"sql":{},"values":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}}},"ignorePatterns":{"type":"array","docString":"","isOptional":true,"defaultValue":"[\\".cache\\", \\"coverage\\", \\"node_modules\\"]","validator":{"convert":false},"sql":{},"values":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}}}},"relations":[]},"subCommands":{"type":"array","docString":"","isOptional":true,"defaultValue":"[]","validator":{"convert":false},"sql":{},"values":{"type":"reference","docString":"","isOptional":false,"validator":{},"sql":{},"reference":{"name":"commandDefinition","group":"cli"}}},"flags":{"type":"array","docString":"","isOptional":true,"defaultValue":"[]","validator":{"convert":false},"sql":{},"values":{"type":"reference","docString":"","isOptional":false,"validator":{},"sql":{},"reference":{"name":"flagDefinition","group":"cli"}}},"executor":{"type":"any","docString":"","isOptional":true,"validator":{},"sql":{},"rawValue":"((logger: import(\\"@compas/stdlib\\").Logger, state: import(\\"../../cli/types\\").CliExecutorState) => (Promise<import(\\"../../cli/types\\").CliResult>|CliResult))","rawValueImport":{},"rawValidator":"((v) => typeof v === \\"function\\")","rawValidatorImport":{}}},"relations":[],"uniqueName":"CliCommandDefinition"}}';
export const cliStructure = JSON.parse(cliStructureString);
export const structure = Object.assign({}, { cli: cliStructure });
export const structureString = JSON.stringify(structure);
