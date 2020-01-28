import { PluginBuildResult, PluginMetaData } from "../../types";

export function getPlugin(): PluginMetaData {
  return {
    name: "comment",
    description: "Adds plugin name and timestamp to the generated files",
    hooks: {
      inspectBuildResult,
    },
  };
}

function inspectBuildResult(result: PluginBuildResult[]) {
  for (const it of result) {
    for (const file of it.files) {
      const ext = getExtension(file.path);
      const comment = getComment(it.name, ext);
      file.source = comment + "\n" + file.source;
    }
  }
}

function getExtension(path: string) {
  const [, ext] = path.substring(path.lastIndexOf("."));

  return ext;
}

function getComment(name: string, ext: string) {
  const lines = [
    `Generated by @lbu/code-gen`,
    `Used plugin: ${name}`,
    `At: ${new Date().toISOString()}`,
    ``,
  ];

  if (ext === "js" || ext === "ts") {
    return `// ${lines.join("\n// ")}`;
  } else if (ext === "sql") {
    return `-- ${lines.join("\n-- ")}`;
  } else if (ext === "yml") {
    return `# ${lines.join("\n# ")}`;
  }

  return "";
}
