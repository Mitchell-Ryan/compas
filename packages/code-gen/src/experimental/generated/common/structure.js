// Generated by @compas/code-gen
/* eslint-disable no-unused-vars */

export const compasGenerateSettings = {
  outputDirectory: "packages/code-gen/src/experimental/generated",
  fileHeader:
    "// Generated by @compas/code-gen\n/* eslint-disable no-unused-vars */\n",
  isBrowser: false,
  isNodeServer: false,
  isNode: true,
  enabledGenerators: ["type", "validator"],
  environment: {},
  useTypescript: false,
  dumpStructure: true,
  dumpApiStructure: false,
  dumpPostgres: false,
  declareGlobalTypes: false,
};
export const experimentalStructureString =
  '{"structure":{"type":"generic","group":"experimental","name":"structure","docString":"","isOptional":false,"validator":{},"sql":{},"keys":{"type":"reference","docString":"","isOptional":false,"validator":{},"sql":{},"reference":{"group":"experimental","name":"namePart","uniqueName":"ExperimentalNamePart"}},"values":{"type":"generic","docString":"","isOptional":false,"validator":{},"sql":{},"keys":{"type":"reference","docString":"","isOptional":false,"validator":{},"sql":{},"reference":{"group":"experimental","name":"namePart","uniqueName":"ExperimentalNamePart"}},"values":{"type":"reference","docString":"","isOptional":false,"validator":{},"sql":{},"reference":{"name":"namedTypeDefinition","group":"experimental"}}},"uniqueName":"ExperimentalStructure"},"generateOptions":{"type":"object","group":"experimental","name":"generateOptions","docString":"","isOptional":false,"validator":{"allowNull":false,"strict":false},"sql":{},"keys":{"targetLanguage":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"oneOf":["js","ts"]},"targetRuntime":{"type":"string","docString":"Only applicable if your \'targetLanguage\' is set to \'js\' or \'ts\'.","isOptional":true,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"oneOf":["node.js","browser","react-native"]},"outputDirectory":{"type":"string","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}},"generators":{"type":"object","docString":"","isOptional":false,"validator":{"allowNull":false,"strict":true},"sql":{},"keys":{"structure":{"type":"object","docString":"Enable a structure dump. This way this structure can be reused vai \'Generator#addStructure","isOptional":true,"validator":{"allowNull":false,"strict":true},"sql":{},"keys":{},"relations":[]},"openApi":{"type":"object","docString":"Enable the OpenAPI generator.","isOptional":true,"validator":{"allowNull":false,"strict":true},"sql":{},"keys":{"openApiExtensions":{"type":"any","docString":"","isOptional":true,"validator":{},"sql":{},"rawValueImport":{},"rawValidatorImport":{}},"openApiRouteExtensions":{"type":"any","docString":"","isOptional":true,"validator":{},"sql":{},"rawValueImport":{},"rawValidatorImport":{}}},"relations":[]},"router":{"type":"object","docString":"Generate a validating router with entry points for your route handlers.","isOptional":true,"validator":{"allowNull":false,"strict":true},"sql":{},"keys":{"targetLibrary":{"type":"string","docString":"Select one of the supported libraries to generate a router for.","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"oneOf":["koa"]},"exposeApiStructure":{"type":"boolean","docString":"Adds a Compas \'_compas/structure.json\' route to the generated router that includes all available routes.","isOptional":true,"defaultValue":"false","validator":{"convert":false,"allowNull":false},"sql":{}}},"relations":[]},"database":{"type":"object","docString":"Generate one of the compatible database interfaces.","isOptional":true,"validator":{"allowNull":false,"strict":true},"sql":{},"keys":{"targetDialect":{"type":"string","docString":"Select one of the supported dialects to generate queries for.","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"oneOf":["postgresql"]}},"relations":[]},"validators":{"type":"object","docString":"Alter the output of generated validators. Other generators will always include validators in their output if necessary.","isOptional":true,"validator":{"allowNull":false,"strict":true},"sql":{},"keys":{"includeBaseTypes":{"type":"boolean","docString":"Always generate validators for all named types even if no other generator needs it.","isOptional":true,"defaultValue":"false","validator":{"convert":false,"allowNull":false},"sql":{}}},"relations":[]},"apiClient":{"type":"object","docString":"Generate an API client, based on the routes in your structure.","isOptional":true,"validator":{"allowNull":false,"strict":true},"sql":{},"keys":{"targetLibrary":{"type":"string","docString":"Select your HTTP client of choice.","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"oneOf":["axios"]},"validateResponses":{"type":"boolean","docString":"Include validators that check the responses. This way you can be sure that the API returns what you expect.","isOptional":true,"defaultValue":"false","validator":{"convert":false,"allowNull":false},"sql":{}},"globalClient":{"type":"boolean","docString":"Use a global api client that will be used for all requests. Only applicable when using \'axios\'.","isOptional":true,"defaultValue":"false","validator":{"convert":false,"allowNull":false},"sql":{}},"includeWrapper":{"type":"string","docString":"Include an API client wrapper to use the api easier with your user interface library.","isOptional":true,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"oneOf":["react-query"]}},"relations":[]},"types":{"type":"object","docString":"Alter the output of the generated types.","isOptional":true,"validator":{"allowNull":false,"strict":true},"sql":{},"keys":{"useGlobalTypes":{"type":"boolean","docString":"Declare all types in the global namespace. Only applicable when using \'targetLanguage\' when set to \'js\' or \'ts\'.","isOptional":true,"defaultValue":"false","validator":{"convert":false,"allowNull":false},"sql":{}},"useGlobalCompasTypes":{"type":"boolean","docString":"Creates global types for types provided by Compas features. Only applicable when using \'targetLanguage\' that is set to \'js\' or \'ts\'.","isOptional":true,"defaultValue":"false","validator":{"convert":false,"allowNull":false},"sql":{}},"generateDeduplicatedTypes":{"type":"boolean","docString":"Combine all types based that would be generated by all structures added via \'Generator#addStructure\' and combine them in to a single output.","isOptional":true,"defaultValue":"false","validator":{"convert":false,"allowNull":false},"sql":{}},"useDeduplicatedTypesPath":{"type":"string","docString":"Import deduplicated types from the provided path. This should set to the same value as the \'outputDirectory\' in the generate call with \'generateDeduplicatedTypes\'.","isOptional":true,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}}},"relations":[]}},"relations":[]}},"relations":[],"uniqueName":"ExperimentalGenerateOptions"},"namedTypeDefinition":{"type":"anyOf","group":"experimental","name":"namedTypeDefinition","docString":"","isOptional":false,"validator":{},"sql":{},"values":[{"type":"reference","docString":"","isOptional":false,"validator":{},"sql":{},"reference":{"name":"booleanDefinition","group":"experimental"}},{"type":"reference","docString":"","isOptional":false,"validator":{},"sql":{},"reference":{"name":"numberDefinition","group":"experimental"}},{"type":"reference","docString":"","isOptional":false,"validator":{},"sql":{},"reference":{"name":"objectDefinition","group":"experimental"}},{"type":"reference","docString":"","isOptional":false,"validator":{},"sql":{},"reference":{"name":"stringDefinition","group":"experimental"}}],"uniqueName":"ExperimentalNamedTypeDefinition"},"typeDefinition":{"type":"anyOf","group":"experimental","name":"typeDefinition","docString":"","isOptional":false,"validator":{},"sql":{},"values":[{"type":"reference","docString":"","isOptional":false,"validator":{},"sql":{},"reference":{"name":"namedTypeDefinition","group":"experimental"}},{"type":"reference","docString":"","isOptional":false,"validator":{},"sql":{},"reference":{"name":"referenceDefinition","group":"experimental"}}],"uniqueName":"ExperimentalTypeDefinition"},"booleanDefinition":{"type":"object","group":"experimental","name":"booleanDefinition","docString":"","isOptional":false,"validator":{"allowNull":false,"strict":false},"sql":{},"keys":{"type":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"oneOf":["boolean"]},"group":{"type":"string","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}},"name":{"type":"string","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}},"docString":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":0},"sql":{}},"isOptional":{"type":"boolean","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false},"sql":{}},"defaultValue":{"type":"anyOf","docString":"","isOptional":true,"validator":{},"sql":{},"values":[{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}},{"type":"boolean","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false},"sql":{}},{"type":"number","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"floatingPoint":false,"min":-2147483647,"max":2147483647},"sql":{}}]},"sql":{"type":"object","docString":"","isOptional":false,"validator":{"allowNull":false,"strict":false},"sql":{},"keys":{"primary":{"type":"boolean","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false},"sql":{}},"searchable":{"type":"boolean","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false},"sql":{}},"hasDefaultValue":{"type":"boolean","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false},"sql":{}}},"relations":[]},"validator":{"type":"object","docString":"","isOptional":false,"validator":{"allowNull":false,"strict":false},"sql":{},"keys":{"convert":{"type":"boolean","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false},"sql":{}},"allowNull":{"type":"boolean","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false},"sql":{}}},"relations":[]},"oneOf":{"type":"boolean","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false},"sql":{}}},"relations":[],"uniqueName":"ExperimentalBooleanDefinition"},"numberDefinition":{"type":"object","group":"experimental","name":"numberDefinition","docString":"","isOptional":false,"validator":{"allowNull":false,"strict":false},"sql":{},"keys":{"type":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"oneOf":["number"]},"group":{"type":"string","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}},"name":{"type":"string","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}},"docString":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":0},"sql":{}},"isOptional":{"type":"boolean","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false},"sql":{}},"defaultValue":{"type":"anyOf","docString":"","isOptional":true,"validator":{},"sql":{},"values":[{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}},{"type":"boolean","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false},"sql":{}},{"type":"number","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"floatingPoint":false,"min":-2147483647,"max":2147483647},"sql":{}}]},"sql":{"type":"object","docString":"","isOptional":false,"validator":{"allowNull":false,"strict":false},"sql":{},"keys":{"primary":{"type":"boolean","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false},"sql":{}},"searchable":{"type":"boolean","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false},"sql":{}},"hasDefaultValue":{"type":"boolean","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false},"sql":{}}},"relations":[]},"validator":{"type":"object","docString":"","isOptional":false,"validator":{"allowNull":false,"strict":false},"sql":{},"keys":{"convert":{"type":"boolean","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false},"sql":{}},"floatingPoint":{"type":"boolean","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false},"sql":{}},"min":{"type":"number","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"floatingPoint":false,"min":-2147483647,"max":2147483647},"sql":{}},"max":{"type":"number","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"floatingPoint":false,"min":-2147483647,"max":2147483647},"sql":{}},"allowNull":{"type":"boolean","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false},"sql":{}}},"relations":[]},"oneOf":{"type":"array","docString":"","isOptional":true,"validator":{"convert":false},"sql":{},"values":{"type":"number","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"floatingPoint":false,"min":-2147483647,"max":2147483647},"sql":{}}}},"relations":[],"uniqueName":"ExperimentalNumberDefinition"},"objectDefinition":{"type":"object","group":"experimental","name":"objectDefinition","docString":"","isOptional":false,"validator":{"allowNull":false,"strict":true},"sql":{},"keys":{"type":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"oneOf":["object"]},"group":{"type":"string","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}},"name":{"type":"string","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}},"docString":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":0},"sql":{}},"isOptional":{"type":"boolean","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false},"sql":{}},"defaultValue":{"type":"anyOf","docString":"","isOptional":true,"validator":{},"sql":{},"values":[{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}},{"type":"boolean","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false},"sql":{}},{"type":"number","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"floatingPoint":false,"min":-2147483647,"max":2147483647},"sql":{}}]},"sql":{"type":"object","docString":"","isOptional":false,"validator":{"allowNull":false,"strict":false},"sql":{},"keys":{"primary":{"type":"boolean","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false},"sql":{}},"searchable":{"type":"boolean","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false},"sql":{}},"hasDefaultValue":{"type":"boolean","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false},"sql":{}}},"relations":[]},"validator":{"type":"object","docString":"","isOptional":false,"validator":{"allowNull":false,"strict":false},"sql":{},"keys":{"allowNull":{"type":"boolean","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false},"sql":{}},"strict":{"type":"boolean","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false},"sql":{}}},"relations":[]},"shortName":{"type":"string","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}},"keys":{"type":"generic","docString":"","isOptional":false,"validator":{},"sql":{},"keys":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}},"values":{"type":"reference","docString":"","isOptional":false,"validator":{},"sql":{},"reference":{"name":"typeDefinition","group":"experimental"}}},"enableQueries":{"type":"boolean","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false},"sql":{}},"queryOptions":{"type":"object","docString":"","isOptional":true,"validator":{"allowNull":false,"strict":false},"sql":{},"keys":{"withSoftDeletes":{"type":"boolean","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false},"sql":{}},"withDates":{"type":"boolean","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false},"sql":{}},"withPrimaryKey":{"type":"boolean","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false},"sql":{}},"isView":{"type":"boolean","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false},"sql":{}},"schema":{"type":"string","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}}},"relations":[]},"relations":{"type":"array","docString":"","isOptional":false,"validator":{"convert":false},"sql":{},"values":{"type":"reference","docString":"","isOptional":false,"validator":{},"sql":{},"reference":{"name":"typeDefinition","group":"experimental"}}}},"relations":[],"uniqueName":"ExperimentalObjectDefinition"},"referenceDefinition":{"type":"object","group":"experimental","name":"referenceDefinition","docString":"","isOptional":false,"validator":{"allowNull":false,"strict":false},"sql":{},"keys":{"type":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"oneOf":["reference"]},"docString":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":0},"sql":{}},"isOptional":{"type":"boolean","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false},"sql":{}},"defaultValue":{"type":"anyOf","docString":"","isOptional":true,"validator":{},"sql":{},"values":[{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}},{"type":"boolean","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false},"sql":{}},{"type":"number","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"floatingPoint":false,"min":-2147483647,"max":2147483647},"sql":{}}]},"sql":{"type":"object","docString":"","isOptional":false,"validator":{"allowNull":false,"strict":false},"sql":{},"keys":{"primary":{"type":"boolean","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false},"sql":{}},"searchable":{"type":"boolean","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false},"sql":{}},"hasDefaultValue":{"type":"boolean","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false},"sql":{}}},"relations":[]},"validator":{"type":"object","docString":"","isOptional":false,"validator":{"allowNull":false,"strict":false},"sql":{},"keys":{},"relations":[]},"reference":{"type":"object","docString":"","isOptional":false,"validator":{"allowNull":false,"strict":false},"sql":{},"keys":{"group":{"type":"reference","docString":"","isOptional":false,"validator":{},"sql":{},"reference":{"group":"experimental","name":"namePart","uniqueName":"ExperimentalNamePart"}},"name":{"type":"reference","docString":"","isOptional":false,"validator":{},"sql":{},"reference":{"group":"experimental","name":"namePart","uniqueName":"ExperimentalNamePart"}}},"relations":[]}},"relations":[],"uniqueName":"ExperimentalReferenceDefinition"},"stringDefinition":{"type":"object","group":"experimental","name":"stringDefinition","docString":"","isOptional":false,"validator":{"allowNull":false,"strict":true},"sql":{},"keys":{"type":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"oneOf":["string"]},"group":{"type":"string","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}},"name":{"type":"string","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}},"docString":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":0},"sql":{}},"isOptional":{"type":"boolean","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false},"sql":{}},"defaultValue":{"type":"anyOf","docString":"","isOptional":true,"validator":{},"sql":{},"values":[{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}},{"type":"boolean","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false},"sql":{}},{"type":"number","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"floatingPoint":false,"min":-2147483647,"max":2147483647},"sql":{}}]},"sql":{"type":"object","docString":"","isOptional":false,"validator":{"allowNull":false,"strict":false},"sql":{},"keys":{"primary":{"type":"boolean","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false},"sql":{}},"searchable":{"type":"boolean","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false},"sql":{}},"hasDefaultValue":{"type":"boolean","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false},"sql":{}}},"relations":[]},"validator":{"type":"object","docString":"","isOptional":false,"validator":{"allowNull":false,"strict":false},"sql":{},"keys":{"convert":{"type":"boolean","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false},"sql":{}},"trim":{"type":"boolean","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false},"sql":{}},"lowerCase":{"type":"boolean","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false},"sql":{}},"upperCase":{"type":"boolean","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false},"sql":{}},"min":{"type":"number","docString":"","isOptional":true,"defaultValue":"1","validator":{"convert":false,"allowNull":false,"floatingPoint":false,"min":-2147483647,"max":2147483647},"sql":{}},"max":{"type":"number","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"floatingPoint":false,"min":-2147483647,"max":2147483647},"sql":{}},"pattern":{"type":"string","docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}},"allowNull":{"type":"boolean","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false},"sql":{}},"disallowedCharacters":{"type":"array","docString":"","isOptional":true,"validator":{"convert":false},"sql":{},"values":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1,"max":2},"sql":{}}}},"relations":[]},"oneOf":{"type":"array","docString":"","isOptional":true,"validator":{"convert":false},"sql":{},"values":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{}}}},"relations":[],"uniqueName":"ExperimentalStringDefinition"},"namePart":{"type":"string","group":"experimental","name":"namePart","docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1,"pattern":"/^[a-zA-Z$][a-zA-Z\\\\d]+$/g"},"sql":{},"uniqueName":"ExperimentalNamePart"}}';
export const experimentalStructure = JSON.parse(experimentalStructureString);
export const structure = Object.assign(
  {},
  { experimental: experimentalStructure },
);
export const structureString = JSON.stringify(structure);
