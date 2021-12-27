export namespace compasGenerateSettings {
  const outputDirectory: string;
  const fileHeader: string;
  const isBrowser: boolean;
  const isNodeServer: boolean;
  const isNode: boolean;
  const enabledGenerators: string[];
  const useTypescript: boolean;
  const dumpStructure: boolean;
  const dumpApiStructure: boolean;
  const dumpPostgres: boolean;
  const declareGlobalTypes: boolean;
  const enabledGroups: string[];
}
export const cliStructureString: '{"flagDefinition":{"type":"object","group":"cli","name":"flagDefinition","docString":"","isOptional":false,"validator":{"strict":true},"keys":{"name":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1}},"rawName":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"trim":false,"lowerCase":true,"upperCase":false,"min":1,"pattern":"/^--\\\\w/g"}},"description":{"type":"string","docString":"","isOptional":true,"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1,"pattern":"/^[^\\\\n]+$/g"}},"modifiers":{"type":"object","docString":"","isOptional":true,"defaultValue":"{\\"isRepeatable\\":false,\\"isRequired\\":false}","validator":{"strict":true},"keys":{"isRepeatable":{"type":"boolean","docString":"","isOptional":true,"defaultValue":"false","validator":{"convert":false}},"isRequired":{"type":"boolean","docString":"","isOptional":true,"defaultValue":"false","validator":{"convert":false}}},"relations":[]},"valueSpecification":{"type":"string","docString":"","isOptional":true,"defaultValue":"\\"boolean\\"","validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"oneOf":["boolean","number","string","booleanOrString"]}},"relations":[],"uniqueName":"CliFlagDefinition"},"commandDefinition":{"type":"object","group":"cli","name":"commandDefinition","docString":"","isOptional":false,"validator":{"strict":true},"keys":{"name":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1}},"shortDescription":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1,"pattern":"/^[^\\\\n]+$/g"}},"longDescription":{"type":"string","docString":"","isOptional":true,"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1}},"modifiers":{"type":"object","docString":"","isOptional":true,"defaultValue":"{\\"isDynamic\\":false,\\"isCosmetic\\":false}","validator":{"strict":true},"keys":{"isDynamic":{"type":"boolean","docString":"","isOptional":true,"defaultValue":"false","validator":{"convert":false}},"isCosmetic":{"type":"boolean","docString":"","isOptional":true,"defaultValue":"false","validator":{"convert":false}}},"relations":[]},"subCommands":{"type":"array","docString":"","isOptional":true,"defaultValue":"[]","validator":{"convert":false},"values":{"type":"reference","docString":"","isOptional":false,"validator":{},"reference":{"group":"cli","name":"commandDefinition","uniqueName":"CliCommandDefinition"}}},"flags":{"type":"array","docString":"","isOptional":true,"defaultValue":"[]","validator":{"convert":false},"values":{"type":"reference","docString":"","isOptional":false,"validator":{},"reference":{"group":"cli","name":"flagDefinition","uniqueName":"CliFlagDefinition"}}}},"relations":[],"uniqueName":"CliCommandDefinition"}}';
export const cliStructure: any;
export namespace structure {
  export { cliStructure as cli };
}
export const structureString: string;
//# sourceMappingURL=structure.d.ts.map