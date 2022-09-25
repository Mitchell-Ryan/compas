import { newLogger } from "@compas/stdlib";
import { TypeCreator } from "../builders/index.js";
import { Generator } from "./generator.js";

/**
 * Create a CodeGen context for used for testing
 *
 * @param {Parameters<Parameters<typeof import("@compas/cli").test>[1]>[0]} t
 * @param {import("./generated/common/types").ExperimentalGenerateOptions} options
 * @param {import("./generated/common/types").ExperimentalStructure} [structure]
 * @returns {import("./generate").GenerateContext}
 */
export function testExperimentalGenerateContext(t, options, structure) {
  return {
    log: t.log,
    outputFiles: [],
    options,
    structure: structure ?? getDefaultStructure(),
  };
}

/**
 * Return a new structure that has coverage for most non error scenarios.
 * Error scenario's should provide their own structure and not default to this variant.
 *
 * @returns {import("./generated/common/types").ExperimentalStructure}
 */
function getDefaultStructure() {
  const generator = new Generator(newLogger({}));
  const T = new TypeCreator("basic");

  // Basic
  generator.add(
    T.bool("boolRequired"),
    T.bool("boolOptional").optional(),
    T.bool("boolOptionalAllowNull").allowNull(),
    T.bool("boolDefault").default(true),
    T.bool("boolOneOf").oneOf(true),
    T.bool("boolConvert").convert(),

    T.number("numberRequired"),
    T.number("numberOptional").optional(),
    T.number("numberOptionalAllowNull").allowNull(),
    T.number("numberDefault").default(5),
    T.number("numberOneOf").oneOf(1, 2, 3),
    T.number("numberConvert").convert(),
    T.number("numberFloat").float(),
    T.number("numberMin").min(5),
    T.number("numberMax").max(5),
  );

  const outputFiles = generator.generate({
    targetLanguage: "js",
    generators: {
      structure: {},
    },
  });

  const outputFile = outputFiles.find(
    (it) => it.relativePath === "common/structure.json",
  );

  const parsed = JSON.parse(outputFile?.contents ?? "{}");
  delete parsed.compas?.$options;

  return parsed;
}
