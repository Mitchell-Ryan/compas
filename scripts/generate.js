import { spawn } from "@compas/stdlib";
import {
  generateCli,
  generateCodeGen,
  generateCompas,
  generateExamples,
  generateStore,
} from "../src/generate.js";

/**
 * @type {CliCommandDefinitionInput}
 */
export const cliDefinition = {
  name: "generate",
  shortDescription: "Run internal code-gen and generate types",
  watchSettings: {
    extensions: ["js"],
    ignorePatterns: ["generated"],
  },
  modifiers: {
    isWatchable: true,
  },
  flags: [
    {
      name: "skipLint",
      rawName: "--skip-lint",
      description: "Skip running the linter",
    },
  ],
  executor: cliExecutor,
};

/**
 *
 * @param {Logger} logger
 * @param {CliExecutorState} state
 * @returns {Promise<CliResult>}
 */
async function cliExecutor(logger, state) {
  logger.info("Generating cli, compas, code-gen & store...");

  generateCli(logger);
  generateCompas(logger);
  generateCodeGen(logger);
  generateStore(logger);
  await generateExamples(logger, state);

  if (state.flags.skipLint !== true) {
    await spawn("compas", ["lint"]);
  }
}
