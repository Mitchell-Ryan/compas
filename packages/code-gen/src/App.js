import { inspect } from "util";
import { newLogger, printProcessMemoryUsage } from "@lbu/insight";
import { isNil } from "@lbu/stdlib";
import {
  addToData,
  callGeneratorMethod,
  hoistNamedItems,
  runGenerators,
} from "./generate.js";
import { codeGenValidators } from "./generated/validators.js";
import { generators, generatorTemplates } from "./generators/index.js";
import { TypeCreator } from "./types/index.js";
import { buildOrInfer } from "./types/TypeBuilder.js";
import { lowerCaseFirst, upperCaseFirst } from "./utils.js";

/**
 * @type {GenerateOpts}
 */
const defaultGenerateOptionsBrowser = {
  isBrowser: true,
  isNodeServer: false,
  isNode: false,
  enabledGenerators: ["type", "validator", "apiClient", "reactQuery"],
  useTypescript: true,
  dumpStructure: false,
  dumpPostgres: false,
  validatorCollectErrors: true,
};

/**
 * @type {GenerateOpts}
 */
const defaultGenerateOptionsNodeServer = {
  isBrowser: false,
  isNodeServer: true,
  isNode: true,
  enabledGenerators: ["type", "validator", "sql", "router", "apiClient"],
  useTypescript: false,
  dumpStructure: true,
  dumpPostgres: true,
  validatorCollectErrors: false,
};

/**
 * @type {GenerateOpts}
 */
const defaultGenerateOptionsNode = {
  isBrowser: false,
  isNodeServer: false,
  isNode: true,
  enabledGenerators: ["type", "validator"],
  useTypescript: false,
  dumpStructure: false,
  dumpPostgres: false,
  validatorCollectErrors: true,
};

/**
 * @class
 */
export class App {
  /**
   * @type {string[]}
   */
  static defaultEslintIgnore = ["no-unused-vars"];

  /**
   * @param {AppOpts} options
   */
  constructor({ verbose }) {
    /**
     * @type {string}
     */
    this.fileHeader = `// Generated by @lbu/code-gen\n`;

    /**
     * @type {boolean}
     */
    this.verbose = verbose || false;

    /**
     * @type {Logger}
     */
    this.logger = newLogger({
      ctx: {
        type: "code_gen",
      },
    });

    /** @type {Set<TypeBuilderLike>} */
    this.unprocessedData = new Set();

    /** @type {CodeGenStructure} */
    this.data = {};
  }

  /**
   * Create a new App instance
   *
   * @public
   * @param {AppOpts} [options={}] Optional options
   * @returns {Promise<App>}
   */
  static async new(options = {}) {
    const app = new App(options);
    await app.init();
    return app;
  }

  /**
   * Init generators and validate types
   *
   * @private
   * @returns {Promise<void>}
   */
  async init() {
    generatorTemplates.globals["upperCaseFirst"] = upperCaseFirst;
    generatorTemplates.globals["lowerCaseFirst"] = lowerCaseFirst;
    generatorTemplates.globals["inspect"] = (arg) =>
      inspect(arg, { sorted: true, colors: false, depth: 15 });

    if (this.verbose) {
      this.logger.info({
        msg: "Registered plugins: ",
        generators: [...generators.keys()],
        types: [...TypeCreator.types.keys()],
      });
    }

    await callGeneratorMethod(this, generators.keys(), "init");
  }

  /**
   * @param {...TypeBuilderLike} builders
   * @returns {this}
   */
  add(...builders) {
    for (const builder of builders) {
      this.unprocessedData.add(builder);
    }

    return this;
  }

  /**
   * @param {object} obj
   * @returns {this}
   */
  addRaw(obj) {
    if (!isNil(codeGenValidators?.type)) {
      const { data, errors } = codeGenValidators.type(obj);
      if (errors) {
        this.logger.error(errors);
        throw errors[0];
      }

      this.addToData(data);
    } else {
      // No validators present, most likely in development environment of lbu
      this.addToData(obj);
    }

    return this;
  }

  /**
   * @param data
   * @returns {this}
   */
  extend(data) {
    if (!isNil(codeGenValidators?.type)) {
      const { data: value, errors } = codeGenValidators.structure(data);
      if (errors) {
        this.logger.error(errors);
        throw errors[0];
      }

      for (const groupData of Object.values(value)) {
        for (const item of Object.values(groupData)) {
          this.addToData(item);
        }
      }
    } else {
      // No validators present, most likely in development environment of lbu
      for (const groupData of Object.values(data)) {
        for (const item of Object.values(groupData)) {
          this.addToData(item);
        }
      }
    }

    return this;
  }

  /**
   * @param {GenerateOpts} options
   * @returns {Promise<void>}
   */
  async generate(options) {
    if (isNil(options?.outputDirectory)) {
      throw new Error("Need options.outputDirectory to write files to.");
    }

    if (
      isNil(options.isBrowser) &&
      isNil(options.isNodeServer) &&
      isNil(options.isNode) &&
      isNil(options.enabledGenerators)
    ) {
      throw new Error(
        `Either options.isBrowser, options.isNodeServer, options.isNode or options.enabledGenerators must be set.`,
      );
    }

    options.enabledGenerators = options.enabledGenerators || [];

    const opts = {
      outputDirectory: options.outputDirectory,
      fileHeader: this.fileHeader + formatEslint() + (options.fileHeader ?? ""),
    };

    if (
      options.isBrowser ||
      options.enabledGenerators.indexOf("reactQuery") !== -1
    ) {
      Object.assign(opts, defaultGenerateOptionsBrowser);
    } else if (
      options.isNodeServer ||
      options.enabledGenerators.indexOf("sql") !== -1 ||
      options.enabledGenerators.indexOf("router") !== -1
    ) {
      Object.assign(opts, defaultGenerateOptionsNodeServer);
    } else if (
      options.isNode ||
      options.enabledGenerators.indexOf("reactQuery") === -1
    ) {
      Object.assign(opts, defaultGenerateOptionsNode);
    }

    opts.useTypescript = options.useTypescript ?? !!opts.useTypescript;
    opts.dumpStructure = options.dumpStructure ?? !!opts.dumpStructure;
    opts.dumpPostgres = options.dumpPostgres ?? !!opts.dumpPostgres;
    opts.validatorCollectErrors =
      options.validatorCollectErrors ?? !!opts.validatorCollectErrors;
    opts.enabledGenerators =
      options.enabledGenerators.length > 0
        ? options.enabledGenerators
        : opts.enabledGenerators ?? [...generators.keys()];

    this.processData();
    hoistNamedItems(this.data, this.data);

    opts.enabledGroups = options.enabledGroups ?? Object.keys(this.data);

    // Make sure to do the same case conversion here as well as to not confuse the user.
    opts.enabledGroups = opts.enabledGroups.map((it) => lowerCaseFirst(it));

    if (opts.enabledGroups.length === 0) {
      throw new Error("Need at least a single group in enabledGroups");
    }

    await runGenerators(this, opts);
    printProcessMemoryUsage(this.logger);
  }

  /**
   * Process unprocessed list, normalize references
   * Depends on referentType being available
   *
   * @private
   */
  processData() {
    for (const item of this.unprocessedData) {
      this.addToData(buildOrInfer(item));
    }
    this.unprocessedData.clear();
  }

  /**
   * @private
   * @param item
   */
  addToData(item) {
    addToData(this.data, item);
  }
}

/**
 * Format eslint-disable comment
 *
 * @returns {string}
 */
function formatEslint() {
  return `/* eslint-disable ${App.defaultEslintIgnore.join(", ")} */\n`;
}
