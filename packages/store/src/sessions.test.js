import { uuid } from "@lbu/stdlib";
import test from "tape";
import { storeQueries } from "./generated/queries.js";
import { newSessionStore } from "./sessions.js";
import {
  cleanupTestPostgresDatabase,
  createTestPostgresDatabase,
} from "./testing.js";

test("store/sessions", async (t) => {
  let sql = undefined;

  t.test("create a test db", async (t) => {
    sql = await createTestPostgresDatabase();
    t.ok(!!sql);

    const result = await sql`SELECT 1 + 2 AS sum`;
    t.equal(result[0].sum, 3);
  });

  t.test("get returns false on non existent id", async (t) => {
    const store = newSessionStore(sql);

    t.equal(await store.get(uuid()), false);
  });

  t.test("get returns set data", async (t) => {
    const store = newSessionStore(sql);
    const id = uuid();
    const data = { foo: "bar" };

    await store.set(id, data, 25);
    t.deepEqual(await store.get(id), data);

    // Make sure upsert query works
    await store.set(id, data, 25);
    t.deepEqual(await store.get(id), data);
  });

  t.test("after destroy return false", async (t) => {
    const store = newSessionStore(sql);
    const id = uuid();

    const data = { foo: "bar" };
    await store.set(id, data, 15);
    t.deepEqual(await store.get(id), data);
    await store.destroy(id);
    t.equal(await store.get(id), false);
  });

  t.test("store.clean removes expired sessions", async (t) => {
    const sessions = await storeQueries.sessionStoreSelect(sql);
    t.equal(sessions.length, 1);

    const store = newSessionStore(sql);
    await new Promise((r) => {
      setTimeout(r, 30);
    });
    await store.clean();

    t.equal(
      (
        await sql`
                  SELECT *
                  FROM "sessionStore"
         `
      ).length,
      0,
    );
  });

  t.test("destroy test db", async (t) => {
    await cleanupTestPostgresDatabase(sql);
    t.ok(true, "closed postgres connection");
  });
});
