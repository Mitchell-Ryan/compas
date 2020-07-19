import * as minioVendor from "minio";
import * as postgresVendor from "postgres";

/**
 * Reexported all of minio package
 */
export const minio: typeof minioVendor;

/**
 * Reexported all of postgres package
 */
export const postgres: typeof postgresVendor;

/**
 * Create a new minio client.
 * By defaults reads configuration from environment variables as specified in docs/env.md
 */
export function newMinioClient(
  options: minioVendor.ClientOptions,
): minioVendor.Client;

/**
 * Create a bucket if it doesn't exist
 */
export function ensureBucket(
  minio: minioVendor.Client,
  bucketName: string,
  region: minioVendor.Region,
): Promise<void>;

/**
 * Remove a bucket
 */
export function removeBucket(
  minio: minioVendor.Client,
  bucketName: string,
): Promise<void>;

/**
 * List all objects in a bucket.
 * Note that this is not a fast operation
 */
export function listObjects(
  minio: minioVendor.Client,
  bucketName: string,
  filter?: string,
): Promise<
  {
    name: string;
    prefix: string;
    size: number;
    etag: string;
    lastModified: Date;
  }[]
>;

/**
 * Removes all objects and then deletes the bucket
 */
export function removeBucketAndObjectsInBucket(
  minio: minioVendor.Client,
  bucketName: string,
): Promise<void>;

/**
 * Create a new postgres client.
 * By defaults reads configuration from environment variables as specified in docs/env.md
 *
 * Will attempt database creation if `createIfNotExists` is set to true
 */
export function newPostgresConnection(
  opts?: postgresVendor.Options<{}> & { createIfNotExists?: boolean },
): postgresVendor.Sql<{}>;

/**
 * Drops connections to 'normal' database and creates a new one based on the 'normal' database.
 * It will truncate all tables and return a connection to the new database.
 */
export function createTestPostgresDatabase(
  verboseSql?: boolean,
): Promise<postgresVendor.Sql<{}>>;

/**
 * Drop the test database created with `createTestPostgresDatabase` and end the connection
 */
export function cleanupTestPostgresDatabase(
  sql: postgresVendor.Sql<{}>,
): Promise<void>;

/**
 * Internal representation of a migration file
 */
export interface MigrateFile {
  namespace: string;
  number: number;
  repeatable: boolean;
  name: string;
  fullPath: string;
  isMigrated: boolean;
  source: string;
  hash: string;
}

/**
 * Information used for doing migrations
 */
export interface MigrateContext {
  files: MigrateFile[];
  namespaces: string[];
  storedHashes: Record<string, string>;
  sql: postgresVendor.Sql<{}>;
}

/**
 * Create a new MigrateContext, requires an advisory lock and does the necessary queries to
 * get the state.
 */
export function newMigrationContext(
  sql: postgresVendor.Sql<{}>,
): Promise<MigrateContext>;

/**
 * Get a list of migrations to be applied
 * Returns false if no migrations need to run
 */
export function getMigrationsToBeApplied(
  mc: MigrateContext,
): false | { name: string; number: number; repeatable: boolean }[];

/**
 * Run the migrations, as returned by `getMigrationsToBeApplied`
 */
export function runMigrations(mc: MigrateContext): Promise<void>;

export interface FileStoreContext {
  sql: postgresVendor.Sql<{}>;
  minio: minioVendor.Client;
  bucketName: string;
}

/**
 * Create a new FileStoreContext
 */
export function newFileStoreContext(
  sql: postgresVendor.Sql<{}>,
  minio: minioVendor.Client,
  bucketName: string,
): FileStoreContext;

export interface StoreFileStore {
  id: string;
  bucketName: string;
  contentLength: number;
  contentType: string;
  filename: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Create or update a file.
 * If you pass in a non-existent id, the function will not error, but also not update the
 * file
 */
export function createOrUpdateFile(
  fc: FileStoreContext,
  props: {
    id?: string;
    bucketName?: string;
    contentLength?: number;
    contentType?: string;
    filename: string;
    createdAt?: string;
    updatedAt?: string;
  },
  streamOrPath: string | NodeJS.ReadStream,
): Promise<StoreFileStore>;

/**
 * Delete a file by id
 * Does not remove the object from minio bucket
 */
export function deleteFile(fc: FileStoreContext, id: string): Promise<void>;

/**
 * Sync deleted files to the minio bucket
 */
export function syncDeletedFiles(fc: FileStoreContext);

/**
 * Create a file copy both in postgres and in minio
 */
export function copyFile(
  fc: FileStoreContext,
  id: string,
  targetBucket?: string,
): Promise<StoreFileStore>;

/**
 * Select a file by id
 */
export function getFileById(
  fc: FileStoreContext,
  id: string,
): Promise<StoreFileStore | undefined>;

/**
 * Open a ReadStream for a (partial) file
 */
export function getFileStream(
  fc: FileStoreContext,
  id: string,
  range?: { start?: number; end?: number },
): Promise<NodeJS.ReadStream>;

export interface FileCacheOptions {
  /**
   * Maximum byte size of a file to be stored in memory
   */
  inMemoryThreshold?: number;

  /**
   * Customize default Cache-Control header to give back
   */
  cacheControlHeader?: string;
}

/**
 * A relatively simple local file cache implementation.
 * Supports saving files in memory and on local disk
 * Files#contentLength smaller than the provided threshold will be stored in memory.
 * A file will always be cached in full, and then the range requests will be evaluated
 *   after The FileCache#clear does not remove files from disk, but will overwrite the
 *   file when added to the cache again
 *
 * FileCache#getFileStream is compatible with `sendFile` in @lbu/server
 */
export class FileCache {
  static fileCachePath: string;

  constructor(fileStore: FileStoreContext, options?: FileCacheOptions);

  /**
   * Get a file(part) from the cache.
   * If the file(part) does not exist, it will try to fetch it from the FileStore
   * If the file store throws an error / it doesn't exist, the error is propagated to the
   * caller
   */
  getFileSteam(
    file: StoreFileStore,
    start?: number,
    end?: number,
  ): Promise<{ stream: NodeJS.ReadStream; cacheControl: string }>;

  /**
   * Remove a file from cache, but not from local disk
   */
  clear(fileId: string): void;
}

/**
 * Raw data for a specific job
 */
export interface JobData {
  id: number;
  createdAt: Date;
  scheduledAt: Date;
  name: string;
  data: any;
}

/**
 * Job creation parameters
 */
export interface JobInput {
  /**
   * Defaults to 0
   */
  priority?: number;

  /**
   * Defaults to empty object
   */
  data?: Record<string, any>;

  /**
   * Defaults to now
   */
  scheduledAt?: Date;

  name: string;
}

export interface JobQueueWorkerOptions {
  handler: (sql: postgresVendor.Sql<{}>, data: JobData) => void | Promise<void>;

  /**
   * Determine the poll interval in milliseconds if the queue was empty. Defaults to 1500 ms
   */
  pollInterval?: number;

  /**
   * Set the amount of parallel jobs to process. Defaults to 1.
   * Make sure it is not higher than the amount of Postgres connections in the pool
   */
  parallelCount?: number;
}

/**
 * Job Queue worker. Supports scheduling, priorities and parallel workers
 * If a name is provided, this worker will only accept jobs with the exact same name
 */
export class JobQueueWorker {
  constructor(
    sql: postgresVendor.Sql<{}>,
    nameOrOptions: string | JobQueueWorkerOptions,
    options?: JobQueueWorkerOptions,
  );

  /**
   * Start the JobQueueWorker
   */
  start(): void;

  /**
   * Stop the JobQueueWorker
   * Running jobs will continue to run, but no new jobs are fetched
   */
  stop(): void;

  /**
   * Get the number of jobs that need to run
   */
  pendingQueueSize(): Promise<
    { pendingCount: number; scheduledCount: number } | undefined
  >;

  /**
   * Return the average time between scheduled and completed for jobs completed in the
   * provided time range in milliseconds
   */
  averageTimeToCompletion(startDate: Date, endDate: Date): Promise<number>;

  /**
   * Uses this queue name and connection to add a job to the queue.
   * If name is already set, it will not be overwritten
   */
  addJob(job: JobInput): Promise<number>;
}

/**
 * Add a new item to the job queue
 * Defaults to `process.env.APP_NAME` if name is not specified
 */
export function addJobToQueue(
  sql: postgresVendor.Sql<{}>,
  job: JobInput,
): Promise<number>;

/**
 * Stripped down from @lbu/server SessionStore
 */
export interface SessionStore {
  get(id: string): Promise<object | boolean>;

  set(id: string, session: object, age: number): Promise<void>;

  destroy(id: string): Promise<void>;

  /**
   * Stop the background job
   */
  kill(): void;
}

export interface SessionStoreOptions {
  /**
   * Interval at which a background job runs to remove expired sessions
   * Defaults to 45 minutes
   */
  cleanupInterval?: number;

  /**
   * Disable deletion interval completely
   */
  disableInterval?: boolean;
}

/**
 * Create a session store that can be used in combination with @lbu/server#session
 */
export function newSessionStore(
  sql: postgresVendor.Sql<{}>,
  opts?: SessionStoreOptions,
): SessionStore;

/**
 * Migration directory
 */
export const migrations: string;

/**
 * LBU structure.
 * Can be used to extend functionality or reference one of the columns
 */
export const storeStructure: any;
