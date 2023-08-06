import { emitKeypressEvents, createInterface } from "node:readline";
import { clearInterval } from "node:timers";
import { AppError } from "@compas/stdlib";
import ansi from "ansi";
import { debugPrint } from "./debug.js";

const cursor = ansi(process.stdout);

/**
 * @type {{
 *   availableActions: *[],
 *   repaintInterval?: NodeJS.Timer,
 *   layoutInfo: {
 *     startingYPosition: number,
 *     infoOutputLines: number,
 *     actionOutputLines: number,
 *     totalOutputLines: number
 *   },
 *   compasVersion: string,
 *   informationBuffer: string[],
 *   appName: string,
 *   isEnabled: boolean,
 *   linesWrittenIntoLayout: number
 * }}
 */
const tuiState = {
  isEnabled: false,
  appName: "Compas",
  compasVersion: "(v0.0.0)",
  informationBuffer: [],
  availableActions: [],

  // initialize with an artificial high number, so we clear the necessary lines.
  linesWrittenIntoLayout: 100,
  repaintInterval: undefined,
  layoutInfo: {
    startingYPosition: 10,
    infoOutputLines: 5,
    actionOutputLines: 2,
    totalOutputLines: 9,
  },
};

/**
 * Set process metadata.
 *
 * @param {{
 *   appName: string,
 *   compasVersion: string,
 * }} metadata
 */
export function tuiStateSetMetadata(metadata) {
  tuiState.appName = metadata.appName;
  tuiState.compasVersion = metadata.compasVersion;
}

/**
 * Add an information line to the TUI output.
 *
 * Contents added to this information buffer should clarify when and why Compas does
 * certain things.
 *
 * @param {string} information
 */
export function tuiPrintInformation(information) {
  tuiState.informationBuffer.push(information.trim());
  debugPrint(`[tui] ${information}`);

  // Let go of old information, that we for sure will never print again
  while (tuiState.informationBuffer.length > 10) {
    tuiState.informationBuffer.shift();
  }

  if (tuiState.isEnabled) {
    tuiPaintLayout();
  }
}

/**
 * Consumes the stream printing it to the screen.
 *
 * Internally, it puts the stdout in buffered mode to prevent screen flickering caused by
 * rapid updates.
 *
 * @param {NodeJS.ReadableStream} stream
 * @returns {Promise<void>}
 */
export async function tuiAttachStream(stream) {
  if (!tuiState.isEnabled) {
    throw AppError.serverError({
      message: "Called `tuiAttachStream`, but tui is not enabled.",
    });
  }

  tuiEnableRepaintInterval();

  const rl = createInterface({
    input: stream,
  });

  for await (const line of rl) {
    cursor.eraseLine().reset().write(`${line}\n`);
    tuiState.linesWrittenIntoLayout++;
  }

  rl.close();
  tuiClearRepaintInterval();
}

/**
 * Set up callbacks for various actions to manage and redraw the TUI.
 */
export function tuiEnable() {
  tuiState.isEnabled = true;

  // General setup
  cursor.reset();

  // hide the cursor position
  cursor.hide();

  // Initial calls
  tuiResize();
  tuiPaintLayout();

  // Exit listeners
  process.on("SIGABRT", () => {
    tuiExit();
  });
  process.on("SIGINT", () => {
    tuiExit();
  });
  process.on("beforeExit", () => {
    tuiExit();
  });

  // Resize listener
  process.stdout.on("resize", () => tuiResize());

  // Input setup + listener
  emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);

  process.stdin.on("keypress", (char, raw) => {
    if (raw.name === "c" && raw.ctrl) {
      // Ctrl + C
      tuiExit();
    }

    if (char === "q") {
      // Q quit
      tuiExit();
    }
  });
}

/**
 * Recalculate the layout info.
 */
function tuiResize() {
  const rows = process.stdout.rows;

  const hasEnoughRoom = rows > 30;

  const infoOutputLines = hasEnoughRoom ? 5 : 3;
  const actionOutputLines = 2;

  // Keep room for 2 headers
  const totalOutputLines = infoOutputLines + actionOutputLines + 2;

  tuiState.layoutInfo = {
    // Add 1 since rows are 'end' inclusive, so we can write on the last row as well.
    startingYPosition: rows - totalOutputLines + 1,
    infoOutputLines,
    actionOutputLines,
    totalOutputLines,
  };
}

/**
 * Cleanup the screen and exit.
 */
function tuiExit() {
  cursor.buffer();

  // show the cursor position, it's pretty strange when that gets lost on ya.
  cursor.show();

  // Remove dev server info, while keeping old process output

  for (
    let i = tuiState.layoutInfo.startingYPosition;
    i <= process.stdout.rows;
    ++i
  ) {
    cursor.goto(1, i);
    cursor.eraseLine();
  }

  cursor.goto(1, tuiState.layoutInfo.startingYPosition);
  cursor.reset();
  cursor.flush();
  process.exit(1);
}

/**
 * Buffer cursor commands and periodically flush.
 */
function tuiEnableRepaintInterval() {
  tuiClearRepaintInterval();

  tuiState.repaintInterval = setInterval(() => {
    tuiPaintLayout();

    cursor.flush();
    cursor.buffer();
  });
}

/**
 * Clear the repaint interval, flush for the last time. From now on every action is
 * written immediately.
 */
function tuiClearRepaintInterval() {
  if (tuiState.repaintInterval) {
    clearInterval(tuiState.repaintInterval);

    tuiPaintLayout();
    cursor.flush();
  }
}

/**
 * Write out information and actions + the known metadata.
 */
function tuiPaintLayout() {
  cursor.reset();

  // Make room for the minimum number of lines that we need at the bottom.
  // This feels kinda hacky, by printing new lines, the buffer scrolls up. Afterward, we
  // reset the cursor so the stream (if set) starts by overwriting layout output.
  // However, we buffer those writes and always append these new lines to prevent layout
  // shifts.
  let linesThatWeNeed = Math.min(
    tuiState.linesWrittenIntoLayout,
    tuiState.layoutInfo.totalOutputLines,
  );
  while (linesThatWeNeed) {
    linesThatWeNeed--;
    cursor.write("\n");
  }

  // We handled these now
  tuiState.linesWrittenIntoLayout = 0;

  // Clear out the lines that we are going to write
  for (
    let i = tuiState.layoutInfo.startingYPosition;
    i < process.stdout.rows;
    ++i
  ) {
    cursor.goto(1, i).eraseLine();
  }

  // Keep track of the lines
  let cursorY = tuiState.layoutInfo.startingYPosition;

  // Information header + app name
  cursor.goto(1, cursorY++);
  cursor.bg
    .grey()
    .fg.brightWhite()
    .write(tuiFormatHeaderText("Information", tuiState.appName))
    .reset();

  const startingIdx = Math.max(
    tuiState.informationBuffer.length - tuiState.layoutInfo.infoOutputLines,
    0,
  );

  for (let i = 0; i < tuiState.layoutInfo.infoOutputLines; ++i) {
    cursor.goto(1, cursorY++);
    cursor.write(tuiState.informationBuffer[startingIdx + i] ?? "");
  }

  // Action header + Compas version
  cursor.goto(1, cursorY++);
  cursor.bg
    .grey()
    .fg.brightWhite()
    .write(tuiFormatHeaderText("Available actions", tuiState.compasVersion))
    .reset();

  // TODO: format and paint available actions

  // Temp write some actions
  cursor.goto(1, cursorY++);
  cursor.bg.blue().write(`L`).reset().write(" Lint    ");
  cursor.goto(1, cursorY++);
  cursor.bg
    .blue()
    .write(`T`)
    .reset()
    .write(" Test    ")
    .bg.blue()
    .write("Q")
    .reset()
    .write(" Quit");

  // Reset the cursor, so if the stream starts writing, it can continue where it left off.
  cursor.goto(1, tuiState.layoutInfo.startingYPosition);
}

/**
 * Format a header. We need to pad with spaces, so the background is enabled continuously.
 *
 * @param {string} [left]
 * @param {string} [right]
 */
function tuiFormatHeaderText(left, right) {
  return (
    (left ?? "") +
    " ".repeat(
      process.stdout.columns - (left?.length ?? 0) - (right?.length ?? 0),
    ) +
    (right ?? "")
  );
}
