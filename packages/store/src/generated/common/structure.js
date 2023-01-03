// Generated by @compas/code-gen
/* eslint-disable no-unused-vars */

export const compasGenerateSettings = {
  outputDirectory: "packages/store/src/generated",
  fileHeader:
    "// Generated by @compas/code-gen\n/* eslint-disable no-unused-vars */\n",
  isBrowser: false,
  isNodeServer: false,
  isNode: true,
  enabledGenerators: ["sql", "validator"],
  environment: {},
  useTypescript: false,
  dumpStructure: true,
  dumpApiStructure: false,
  dumpPostgres: true,
  enabledGroups: ["store"],
};
export const storeStructureString =
  '{"imageTransformOptions":{"docString":"Set as \'.query(T.reference(\\"store\\", \\"imageTransformOptions\\"))\' of routes that use \'sendTransformedImage\'.","isOptional":false,"validator":{"allowNull":false,"strict":false},"sql":{},"type":"object","group":"store","name":"imageTransformOptions","keys":{"q":{"docString":"","isOptional":true,"validator":{"convert":true,"allowNull":false,"floatingPoint":false,"min":1,"max":100},"sql":{},"type":"number","defaultValue":"75"},"w":{"docString":"","isOptional":false,"validator":{"convert":true,"allowNull":false,"floatingPoint":false,"min":1,"max":99999},"sql":{},"type":"number"}},"relations":[],"uniqueName":"StoreImageTransformOptions"},"secureImageTransformOptions":{"docString":"Set as \'.query(T.reference(\\"store\\", \\"secureImageTransformOptions\\"))\' of routes that use \'sendTransformedImage\' and \'fileVerifyAccessToken\'.","isOptional":false,"validator":{"allowNull":false,"strict":false},"sql":{},"type":"object","group":"store","name":"secureImageTransformOptions","keys":{"accessToken":{"docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"type":"string"},"q":{"docString":"","isOptional":true,"validator":{"convert":true,"allowNull":false,"floatingPoint":false,"min":1,"max":100},"sql":{},"type":"number","defaultValue":"75"},"w":{"docString":"","isOptional":false,"validator":{"convert":true,"allowNull":false,"floatingPoint":false,"min":1,"max":99999},"sql":{},"type":"number"}},"relations":[],"uniqueName":"StoreSecureImageTransformOptions"},"fileResponse":{"docString":"","isOptional":false,"validator":{"allowNull":false,"strict":true},"sql":{},"type":"object","group":"store","name":"fileResponse","keys":{"id":{"docString":"","isOptional":false,"validator":{"allowNull":false},"sql":{},"type":"uuid"},"name":{"docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"type":"string"},"contentType":{"docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"type":"string"},"url":{"docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"type":"string"},"placeholderImage":{"docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"type":"string"},"altText":{"docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"type":"string"}},"relations":[],"uniqueName":"StoreFileResponse"},"file":{"docString":"Postgres based file storage.","isOptional":false,"validator":{"allowNull":false,"strict":true},"sql":{},"type":"object","group":"store","name":"file","enableQueries":true,"queryOptions":{"withDates":true,"withPrimaryKey":true},"keys":{"bucketName":{"docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{"searchable":true},"type":"string"},"contentLength":{"docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"floatingPoint":false,"min":-2147483647,"max":2147483647},"sql":{},"type":"number"},"contentType":{"docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"type":"string"},"name":{"docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"type":"string"},"meta":{"docString":"","isOptional":false,"validator":{},"sql":{},"type":"reference","reference":{"group":"store","name":"fileMeta","uniqueName":"StoreFileMeta"}}},"relations":[],"uniqueName":"StoreFile"},"sessionStore":{"docString":"Session data store, used by \'sessionStore*\' functions.","isOptional":false,"validator":{"allowNull":false,"strict":true},"sql":{},"type":"object","group":"store","name":"sessionStore","enableQueries":true,"queryOptions":{"withDates":true,"withPrimaryKey":true},"keys":{"data":{"docString":"","isOptional":true,"validator":{"allowNull":false},"sql":{},"type":"any","rawValueImport":{},"rawValidatorImport":{},"defaultValue":"{}"},"checksum":{"docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"type":"string"},"revokedAt":{"docString":"","isOptional":true,"validator":{"allowNull":false},"sql":{},"type":"date"}},"relations":[{"type":"relation","subType":"oneToMany","ownKey":"accessTokens","isOptional":false,"reference":{"docString":"","isOptional":false,"validator":{},"sql":{},"type":"reference","reference":{"name":"sessionStoreToken","group":"store"}}}],"uniqueName":"StoreSessionStore"},"sessionStoreToken":{"docString":"Store all tokens that belong to a session.","isOptional":false,"validator":{"allowNull":false,"strict":true},"sql":{},"type":"object","group":"store","name":"sessionStoreToken","enableQueries":true,"queryOptions":{"withPrimaryKey":true},"keys":{"expiresAt":{"docString":"","isOptional":false,"validator":{"allowNull":false},"sql":{"searchable":true},"type":"date"},"revokedAt":{"docString":"","isOptional":true,"validator":{"allowNull":false},"sql":{"searchable":true},"type":"date"},"createdAt":{"docString":"","isOptional":false,"validator":{"allowNull":false},"sql":{},"type":"date"}},"relations":[{"type":"relation","subType":"manyToOne","ownKey":"session","referencedKey":"accessTokens","isOptional":false,"reference":{"docString":"","isOptional":false,"validator":{},"sql":{},"type":"reference","reference":{"name":"sessionStore","group":"store"}}},{"type":"relation","subType":"oneToOne","ownKey":"refreshToken","referencedKey":"accessToken","isOptional":true,"reference":{"docString":"","isOptional":false,"validator":{},"sql":{},"type":"reference","reference":{"name":"sessionStoreToken","group":"store"}}}],"uniqueName":"StoreSessionStoreToken"},"job":{"docString":"\\n      Postgres based job queue.\\n      Use {@link queueWorkerAddJob} to insert new jobs in to the queue and {@link queueWorkerRegisterCronJobs} for all your recurring jobs.\\n      Use {@link queueWorkerCreate} as a way to pick up jobs.\\n      ","isOptional":false,"validator":{"allowNull":false,"strict":true},"sql":{},"type":"object","group":"store","name":"job","enableQueries":true,"queryOptions":{"withDates":true,"withPrimaryKey":true},"keys":{"id":{"docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"floatingPoint":false,"min":-2147483647,"max":2147483647},"sql":{"searchable":true,"primary":true},"type":"number"},"isComplete":{"docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false},"sql":{"searchable":true},"type":"boolean","defaultValue":"false"},"priority":{"docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"floatingPoint":false,"min":0},"sql":{},"type":"number","defaultValue":"0"},"scheduledAt":{"docString":"","isOptional":true,"validator":{"allowNull":false},"sql":{"searchable":true},"type":"date","defaultValue":"(new Date())"},"name":{"docString":"","isOptional":false,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{"searchable":true},"type":"string"},"data":{"docString":"","isOptional":true,"validator":{"allowNull":false},"sql":{},"type":"any","rawValueImport":{},"rawValidatorImport":{},"defaultValue":"{}"},"retryCount":{"docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"floatingPoint":false,"min":-2147483647,"max":2147483647},"sql":{},"type":"number","defaultValue":"0"},"handlerTimeout":{"docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"floatingPoint":false,"min":1000},"sql":{},"type":"number"}},"relations":[],"uniqueName":"StoreJob"},"fileMeta":{"docString":"User definable, optional object to store whatever you want","isOptional":true,"validator":{"allowNull":false,"strict":true},"sql":{},"type":"object","group":"store","name":"fileMeta","defaultValue":"{}","keys":{"transforms":{"docString":"","isOptional":true,"validator":{"allowNull":false},"sql":{},"type":"any","rawValueImport":{},"rawValidatorImport":{}},"transformedFromOriginal":{"docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"type":"string"},"placeholderImage":{"docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"type":"string"},"altText":{"docString":"","isOptional":true,"validator":{"convert":false,"allowNull":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{},"type":"string"}},"relations":[],"uniqueName":"StoreFileMeta"}}';
export const storeStructure = JSON.parse(storeStructureString);
export const structure = Object.assign({}, { store: storeStructure });
export const structureString = JSON.stringify(structure);
