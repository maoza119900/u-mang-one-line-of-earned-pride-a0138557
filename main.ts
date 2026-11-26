// One Line of Earned Pride — u-mang-one-line-of-earned-pride-a0138557
//
// Writes a single line of text (1–240 characters) to
// $MAKEFUN_OUTPUT_DIR/entry.txt.
//
// Fully deterministic: the entry is a constant string. No randomness,
// no timestamps, no input, no network. Every run writes the exact
// same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The apprentice who'd burned a hundred welds laid one bead so clean the foreman just nodded and kept walking.";

// The gate requires 1–240 characters of non-whitespace UTF-8 text.
if (ENTRY.length < 1 || ENTRY.length > 240 || ENTRY.trim().length === 0) {
  throw new Error(`Entry is ${ENTRY.length} characters; the gate requires 1–240.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
