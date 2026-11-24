import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "We held a meeting to discuss why we have too many meetings. It ran two hours over, so we booked a follow-up to finish discussing it.";

// The program writes exactly this one line: no trailing newline, no extra text.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
