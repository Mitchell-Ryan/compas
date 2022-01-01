import { writeFile } from "fs/promises";
import { pathJoin } from "@compas/stdlib";

/**
 * @type {import("../../generated/common/types.js").CliCommandDefinitionInput}
 */
export const cliDefinition = {
  name: "init",
  shortDescription: "Init various files in the current project.",
  flags: [
    {
      name: "dumpJSConfig",
      rawName: "--jsconfig",
      description:
        "Creates or overwrites the root jsconfig.json file, to use with the Typescript Language Server.",
      modifiers: {
        isRequired: true,
      },
    },
  ],
  executor: cliExecutor,
};

/**
 *
 * @param {import("@compas/stdlib").Logger} logger
 * @param {import("../../cli/types.js").CliExecutorState} state
 * @returns {Promise<import("../../cli/types.js").CliResult>}
 */
export async function cliExecutor(logger, state) {
  let didDump = false;
  if (state.flags.dumpJSConfig) {
    didDump = true;
    await writeJSConfig();
  }

  if (didDump) {
    logger.info("Init successful.");

    return {
      exitStatus: "passed",
    };
  }

  logger.info("Init did not write any files.");

  return {
    exitStatus: "failed",
  };
}

async function writeJSConfig() {
  await writeFile(
    pathJoin(process.cwd(), "jsconfig.json"),
    JSON.stringify(
      {
        compilerOptions: {
          target: "esnext",
          lib: ["esnext"],
          noEmit: true,
          module: "esnext",
          checkJs: true,
          maxNodeModuleJsDepth: 0,
          baseUrl: "./",
          moduleResolution: "node",
          strict: true,
        },
        typeAcquisition: {
          enable: true,
        },
        include: ["**/*.js"],
        exclude: ["**/*.test.js"],
      },
      null,
      2,
    ),
  );
}