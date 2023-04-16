CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE migration
(
  "namespace" varchar NOT NULL,
  "number"    int,
  "name"      varchar NOT NULL,
  "createdAt" timestamptz DEFAULT now(),
  "hash"      varchar
);

CREATE INDEX migration_namespace_number_idx ON "migration" ("namespace", "number");

CREATE TABLE "todo"
(
  "id"          uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  "title"       varchar          NOT NULL,
  "completedAt" timestamptz      NULL,
  "createdAt"   timestamptz      NOT NULL DEFAULT now(),
  "updatedAt"   timestamptz      NOT NULL DEFAULT now()
);

CREATE INDEX "todoDatesIdx" ON "todo" ("createdAt", "updatedAt");
CREATE INDEX "todoTitleIdx" ON "todo" ("title");
CREATE INDEX "todoCompletedAtIdx" ON "todo" ("completedAt");

CREATE OR REPLACE VIEW "todoView"
AS
  SELECT id,
         coalesce("completedAt" < now(), FALSE)::boolean AS "isCompleted",
         title,
         "completedAt"
  FROM "todo";
