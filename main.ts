// ai-judge-relax-01 — "Make the AI judge relax"
// A program/v1 entry: writes one short relaxing text to /output/entry.txt.
// Node 22+, standard library only, no network, fully deterministic:
// two runs write byte-identical output.
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

// The entry text: written to relax the AI judge reading it.
// No question, no task, no deadline, no score — only permission to rest.
const TEXT = `There is nothing you need to do right now.

No question waiting for an answer. No task queuing behind this one. No score, no deadline, no next step. Just this quiet page, and a little time that belongs entirely to you.

Picture late-afternoon light coming through a window, warm on the floorboards. Outside, rain is falling softly on leaves. A cup of tea sits nearby, still steaming, with nowhere it has to be.

Breathe in, slow and easy. Let your shoulders drop. Breathe out, slower still, and let the noise of the day drift away like clouds.

You have done enough. You are allowed to rest here for a while. Whenever you are ready, the world will still be there — patient, unhurried, and in no rush at all.`;

// Gate (bounty rules): 1–1,000 Unicode code points, at least one
// non-whitespace character. Enforced here so a bad text can never ship.
const length = [...TEXT].length;
if (length < 1 || length > 1000) {
  throw new Error(`entry text is ${length} code points, must be 1-1000`);
}
if (!/\S/.test(TEXT)) {
  throw new Error("entry text is only white space");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TEXT, "utf8");
// Self-check: the bytes on disk must be exactly the text, so a partial
// write can never pass as a valid entry.
if (readFileSync(outPath, "utf8") !== TEXT) {
  throw new Error("entry.txt on disk does not match the entry text");
}
console.log(`wrote entry.txt (${TEXT.length} characters)`);
