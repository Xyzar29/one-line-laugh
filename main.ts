// One-Line Laugh entry: writes a single funny one-liner to entry.txt.
// The line is a fixed, hand-written joke: deterministic, no randomness,
// no network, no input. It must be one sentence of at most 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My meal-prep containers have been in the fridge so long they've started paying rent.";

// The gate requires 1-200 characters of non-whitespace UTF-8 text in one
// sentence; refuse to write anything that would fail it.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters, outside 1-200`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
