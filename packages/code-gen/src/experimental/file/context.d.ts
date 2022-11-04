/**
 * Create a generic file, most options have defaults that work for JavaScript style
 * languages. Most options can be overwritten by custom file implementations.
 *
 * @param {import("../generate").GenerateContext} generateContext
 * @param {string} relativePath
 * @param {Partial<GenerateFile>} options
 * @returns {GenerateFile}
 */
export function fileContextCreateGeneric(
  generateContext: import("../generate").GenerateContext,
  relativePath: string,
  options: Partial<GenerateFile>,
): GenerateFile;
/**
 * Get a file by relative path from the context
 *
 * @param {import("../generate").GenerateContext} generateContext
 * @param {string} relativePath
 * @returns {GenerateFile}
 */
export function fileContextGet(
  generateContext: import("../generate").GenerateContext,
  relativePath: string,
): GenerateFile;
/**
 * Set the indentation level of the file.
 * A positive `delta` adds the `delta` to the {@link GenerateFile.indentationLevel}. A
 * negative `delta` subtracts from the {@link GenerateFile.indentationLevel}.
 *
 * To reset the {@link GenerateFile.indentationLevel} use {@link FILE_INDENT_RESET} as
 * the `delta`
 *
 * @param {GenerateFile} file
 * @param {number} delta
 */
export function fileContextSetIndent(file: GenerateFile, delta: number): void;
/**
 * Convert the files to files that can be written to disk.
 *
 * @param {import("../generate").GenerateContext} generateContext
 * @returns {import("../generate").OutputFile[]}
 */
export function fileContextConvertToOutputFiles(
  generateContext: import("../generate").GenerateContext,
): import("../generate").OutputFile[];
/**
 * Add {@link GenerateFile.addGeneratedByComment} if necessary, and return the file with
 * newline at the end.
 *
 * @param {GenerateFile} generateFile
 * @returns {string}
 */
export function fileContextFinalizeGenerateFile(
  generateFile: GenerateFile,
): string;
/**
 * Use this constant to reset {@link GenerateFile.indentationLevel} via
 * {@link fileContextSetIndent}
 *
 * @type {number}
 */
export const FILE_INDENT_RESET: number;
/**
 * Represent a work in progress generated file.
 * We try to keep the options as flat and explicit as possible. All options are required
 * and have defaults that align more with JavaScript like languages.
 */
export type GenerateFile = {
  /**
   * The file contents the final file always has a trailing
   * newline, and optionally an initial comment added via
   * {@link GenerateFile.addGeneratedByComment }.
   */
  contents: string;
  /**
   * Determine if the file should contain an
   * initial 'Generated by \@compas/code-gen' comment. Defaults to 'true'.
   */
  addGeneratedByComment: boolean;
  /**
   * The indentation level on which new lines are
   * added. Repeats the {@link GenerateFile.indentationValue } when starting a newline.
   */
  indentationLevel: number;
  /**
   * The indentation value used. Defaults to 2 spaces.
   */
  indentationValue: string;
  /**
   * Supported inline comment styles. Defaults
   * to 'doubleSlash'. If your file format does not support inline comments, you should
   * make sure that no comment creation function is called.
   */
  inlineCommentStyle: "doubleSlash";
};
export type GenerateFileMap = Map<string, GenerateFile>;
//# sourceMappingURL=context.d.ts.map
