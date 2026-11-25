// Famous Last Words: The Funniest Epitaph — entry program.
//
// The whole entry is one line of dying speech, carved as a tombstone
// epitaph. The program's only job is to write that line, exactly and
// deterministically, to /output/entry.txt (or to OUTPUT_PATH when set,
// which the local checks use). No network, no randomness, no input.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The epitaph: a man who was right about everything, right up until
// the ladder. Setup in the classic "Here lies" voice, then the turn.
const EPITAPH =
  "Here lies Dave. He died doing what he loved: being right. He was wrong about the ladder.";

const MAX_CHARS = 150;

function fail(message: string): never {
  console.error(`entry error: ${message}`);
  process.exit(1);
}

function checkLine(line: string): void {
  const chars = [...line];
  if (line.trim().length === 0) {
    fail("epitaph must not be empty or whitespace only");
  }
  if (line.includes("\n") || line.includes("\r")) {
    fail("epitaph must be a single line");
  }
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    fail(`epitaph must be 1 to ${MAX_CHARS} characters, got ${chars.length}`);
  }
}

const target = process.env.OUTPUT_PATH ?? "/output/entry.txt";
checkLine(EPITAPH);
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, EPITAPH, "utf8");
console.log(`wrote ${[...EPITAPH].length} characters to ${target}`);
