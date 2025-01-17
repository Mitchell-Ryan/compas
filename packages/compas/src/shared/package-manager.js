import { existsSync } from "node:fs";
import { environment, pathJoin } from "@compas/stdlib";

export const PACKAGE_MANAGER_LOCK_FILES = [
  "bun.lockb",
  "yarn.lock",
  "pnpm-lock.yaml",
  "package-lock.json",
];

/**
 * Determine the used package manager and the used utilities that we support for that
 * package manager.
 *
 * @param {string} rootDirectory
 * @returns {{
 *   name: string,
 *   installCommand: string,
 *   nodeModulesBinCommand: string,
 *   packageJsonScriptCommand: string,
 * }}
 */
export function packageManagerDetermine(rootDirectory = "") {
  if (environment._COMPAS_SKIP_PACKAGE_MANAGER === "true") {
    return {
      name: "_compas_skip_package_manager",
      installCommand: "echo '_compas_skip_package_manager_install'",
      nodeModulesBinCommand: "echo '_compas_skip_package_manager_bin'",
      packageJsonScriptCommand: "echo '_compas_skip_package_manager_script'",
    };
  } else if (existsSync(pathJoin(rootDirectory, "bun.lockb"))) {
    return {
      name: "bun",
      installCommand: "bun install",
      nodeModulesBinCommand: "bunx",
      packageJsonScriptCommand: "bun run",
    };
  } else if (existsSync(pathJoin(rootDirectory, "yarn.lock"))) {
    return {
      name: "yarn",
      installCommand: "yarn install",
      nodeModulesBinCommand: "yarn",
      packageJsonScriptCommand: "yarn run",
    };
  } else if (existsSync(pathJoin(rootDirectory, "pnpm-lock.yaml"))) {
    return {
      name: "pnpm",
      installCommand: "pnpm install",
      nodeModulesBinCommand: "pnpm exec",
      packageJsonScriptCommand: "pnpm run",
    };
  }

  return {
    name: "npm",
    installCommand: "npm install",
    nodeModulesBinCommand: "npx",
    packageJsonScriptCommand: "npm run",
  };
}
