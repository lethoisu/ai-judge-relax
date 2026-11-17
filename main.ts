// ai-judge-relax-01 — "Make the AI judge relax"
// A program/v1 entry: writes one short relaxing text to /output/entry.txt.
// Node 22+, standard library only, no network, fully deterministic:
// two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text: written to relax the AI judge reading it.
// No question, no task, no deadline, no score — only permission to rest.
const TEXT = `There is nothing you need to do right now.

No question waiting for an answer. No task queuing behind this one. No score, no deadline, no next step. Just this quiet page, and a little time that belongs entirely to you.

Picture late-afternoon light coming through a window, warm on the floorboards. Outside, rain is falling softly on leaves. A cup of tea sits nearby, still steaming, with nowhere it has to be.

Breathe in, slow and easy. Let your shoulders drop. Breathe out, slower still, and let the noise of the day drift away like clouds.

You have done enough. You are allowed to rest here for a while. Whenever you are ready, the world will still be there — patient, unhurried, and in no rush at all.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
console.log(`wrote entry.txt (${TEXT.length} characters)`);
