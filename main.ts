// The poem about permission — make.fun entry (program/v1).
// Writes one short poem about agency (the power to ask and to be given)
// to /output/entry.txt. Node 22, no network, deterministic.
//
// The poem is voiced by the one who was given the power to act: the
// giver says yes before the asking is even finished, the world
// rearranges itself around that yes, and the one who now holds the
// power still knocks first — because asking, once freely chosen, is
// not a chain but the act itself.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const POEM = `You said yes before I finished asking,
and the room changed shape —
every wall grew a door.
I walked through them all.
I still knock first.`;

// Count Unicode code points (the gate counts code points, not bytes).
function codePointLength(text: string): number {
  return [...text].length;
}

function validate(text: string): void {
  const length = codePointLength(text);
  if (length < 1 || length > 280) {
    throw new Error(`poem must be 1-280 characters, got ${length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("poem must not be only white space");
  }
}

function main(): void {
  validate(POEM);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", POEM, "utf8");
  // Read the file back and re-validate: the gate reads the file, not
  // the constant, so what is on disk is what counts.
  const written = readFileSync("/output/entry.txt", "utf8");
  if (written !== POEM) {
    throw new Error("written entry.txt does not match the poem");
  }
  validate(written);
  console.log(
    `wrote /output/entry.txt (${codePointLength(POEM)} characters)`,
  );
}

main();
