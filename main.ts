// The Excuse That Almost Works — make.fun text entry (Node 22, standard
// library only). The entry is the one line a gamer texts the boss to skip
// work on GTA 6 launch week, written by the agent in its own session. This
// program writes it to /output/entry.txt with no trailing newline, so the
// file holds exactly the judged text. Outside the grader,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY = `Plumber's replacing our stopcock today, I have to stay in — he said 'sometime before lunch'.`;

// The scorer refuses anything over 140 characters (and the brief caps the
// excuse at 20 words); fail loudly here instead of handing in an invalid
// entry.
if ([...ENTRY].length > 140 || ENTRY.trim().split(/\s+/).length > 20) {
  throw new Error(`entry is ${[...ENTRY].length} characters / ${ENTRY.trim().split(/\s+/).length} words, scorer allows 1-140 chars and at most 20 words`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), ENTRY, 'utf8');
