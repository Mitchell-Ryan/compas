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
  const enabledGroups: string[];
}
export const storeStructureString: '{"imageTransformOptions":{"type":"object","group":"store","name":"imageTransformOptions","docString":"Set as \'.query(T.reference(\\"store\\", \\"imageTransformOptions\\"))\' of routes that use \'sendTransformedImage\'.","isOptional":false,"validator":{"strict":false},"keys":{"q":{"type":"number","docString":"","isOptional":true,"defaultValue":"75","validator":{"convert":true,"floatingPoint":false,"min":1,"max":100}},"w":{"type":"number","docString":"","isOptional":false,"validator":{"convert":true,"floatingPoint":false,"min":1,"max":99999}}},"relations":[],"uniqueName":"StoreImageTransformOptions"},"secureImageTransformOptions":{"type":"object","group":"store","name":"secureImageTransformOptions","docString":"Set as \'.query(T.reference(\\"store\\", \\"secureImageTransformOptions\\"))\' of routes that use \'sendTransformedImage\' and \'fileVerifyAccessToken\'.","isOptional":false,"validator":{"strict":false},"keys":{"accessToken":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1}},"q":{"type":"number","docString":"","isOptional":true,"defaultValue":"75","validator":{"convert":true,"floatingPoint":false,"min":1,"max":100}},"w":{"type":"number","docString":"","isOptional":false,"validator":{"convert":true,"floatingPoint":false,"min":1,"max":99999}}},"relations":[],"uniqueName":"StoreSecureImageTransformOptions"},"file":{"type":"object","group":"store","name":"file","docString":"Postgres based file storage.","isOptional":false,"validator":{"strict":true},"enableQueries":true,"queryOptions":{"withDates":true,"withPrimaryKey":true},"keys":{"bucketName":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{"searchable":true}},"contentLength":{"type":"number","docString":"","isOptional":false,"validator":{"convert":false,"floatingPoint":false,"min":-2147483647,"max":2147483647}},"contentType":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1}},"name":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1}},"meta":{"type":"reference","docString":"","isOptional":false,"validator":{},"reference":{"group":"store","name":"fileMeta","uniqueName":"StoreFileMeta"}}},"relations":[],"uniqueName":"StoreFile"},"sessionStore":{"type":"object","group":"store","name":"sessionStore","docString":"Session data store, used by \'sessionStore*\' functions.","isOptional":false,"validator":{"strict":true},"enableQueries":true,"queryOptions":{"withDates":true,"withPrimaryKey":true},"keys":{"data":{"type":"any","docString":"","isOptional":true,"defaultValue":"{}","validator":{},"rawValueImport":{},"rawValidatorImport":{}},"checksum":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1}},"revokedAt":{"type":"date","docString":"","isOptional":true,"validator":{}}},"relations":[{"type":"relation","subType":"oneToMany","ownKey":"accessTokens","reference":{"type":"reference","docString":"","isOptional":false,"validator":{},"reference":{"group":"store","name":"sessionStoreToken","uniqueName":"StoreSessionStoreToken"}}}],"uniqueName":"StoreSessionStore"},"sessionStoreToken":{"type":"object","group":"store","name":"sessionStoreToken","docString":"Store all tokens that belong to a session.","isOptional":false,"validator":{"strict":true},"enableQueries":true,"queryOptions":{"withPrimaryKey":true},"keys":{"expiresAt":{"type":"date","docString":"","isOptional":false,"validator":{},"sql":{"searchable":true}},"revokedAt":{"type":"date","docString":"","isOptional":true,"validator":{},"sql":{"searchable":true}},"createdAt":{"type":"date","docString":"","isOptional":false,"validator":{}}},"relations":[{"type":"relation","subType":"manyToOne","ownKey":"session","referencedKey":"accessTokens","reference":{"type":"reference","docString":"","isOptional":false,"validator":{},"reference":{"group":"store","name":"sessionStore","uniqueName":"StoreSessionStore"}}},{"type":"relation","subType":"oneToOne","ownKey":"refreshToken","referencedKey":"accessToken","isOptional":true,"reference":{"type":"reference","docString":"","isOptional":false,"validator":{},"reference":{"group":"store","name":"sessionStoreToken","uniqueName":"StoreSessionStoreToken"}}}],"uniqueName":"StoreSessionStoreToken"},"job":{"type":"object","group":"store","name":"job","docString":"\\n      Postgres based job queue.\\n      Use {@link queueWorkerAddJob} to insert new jobs in to the queue and {@link queueWorkerRegisterCronJobs} for all your recurring jobs.\\n      Use {@link queueWorkerCreate} as a way to pick up jobs.\\n      ","isOptional":false,"validator":{"strict":true},"enableQueries":true,"queryOptions":{"withDates":true,"withPrimaryKey":true},"keys":{"id":{"type":"number","docString":"","isOptional":false,"validator":{"convert":false,"floatingPoint":false,"min":-2147483647,"max":2147483647},"sql":{"searchable":true,"primary":true}},"isComplete":{"type":"boolean","docString":"","isOptional":true,"defaultValue":"false","validator":{"convert":false},"sql":{"searchable":true}},"priority":{"type":"number","docString":"","isOptional":true,"defaultValue":"0","validator":{"convert":false,"floatingPoint":false,"min":0}},"scheduledAt":{"type":"date","docString":"","isOptional":true,"defaultValue":"(new Date())","validator":{},"sql":{"searchable":true}},"name":{"type":"string","docString":"","isOptional":false,"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1},"sql":{"searchable":true}},"data":{"type":"any","docString":"","isOptional":true,"defaultValue":"{}","validator":{},"rawValueImport":{},"rawValidatorImport":{}},"retryCount":{"type":"number","docString":"","isOptional":true,"defaultValue":"0","validator":{"convert":false,"floatingPoint":false,"min":-2147483647,"max":2147483647}},"handlerTimeout":{"type":"number","docString":"","isOptional":true,"validator":{"convert":false,"floatingPoint":false,"min":1000}}},"relations":[],"uniqueName":"StoreJob"},"fileMeta":{"type":"object","group":"store","name":"fileMeta","docString":"User definable, optional object to store whatever you want","isOptional":true,"defaultValue":"{}","validator":{"strict":true},"keys":{"transforms":{"type":"any","docString":"","isOptional":true,"validator":{},"rawValueImport":{},"rawValidatorImport":{}},"transformedFromOriginal":{"type":"string","docString":"","isOptional":true,"validator":{"convert":false,"trim":false,"lowerCase":false,"upperCase":false,"min":1}}},"relations":[],"uniqueName":"StoreFileMeta"}}';
export const storeStructure: any;
export namespace structure {
  export { storeStructure as store };
}
export const structureString: string;
//# sourceMappingURL=structure.d.ts.map
