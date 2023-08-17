import { newLogger } from "@compas/stdlib";
import { configResolve } from "../config.js";
import { logger, loggerEnable } from "../output/log.js";
import { output } from "../output/static.js";

/**
 * Run Compas in CI mode
 *
 * @param {import("../config.js").ConfigEnvironment} env
 * @returns {Promise<void>}
 */
export async function ciMode(env) {
  loggerEnable(newLogger());
  output.config.environment.loaded(env);

  const config = await configResolve("", true);

  logger.info({
    env,
    config,
  });
}