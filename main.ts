// Entry: one Wi-Fi name that tells a whole story in 32 characters.
// The joke is a divorce settled in two sentences — he kept the dog,
// she kept the connection, and the Wi-Fi password stayed with her.

import { writeFileSync, mkdirSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The full story, in one network name.
const story = "He took the dog. I took the WiFi";

// Sanity check: the bounty caps the name at 32 characters.
if (story.length !== 32) {
  throw new Error(`entry must be 32 characters, got ${story.length}`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, story, { encoding: "utf8" });
process.stdout.write(story + "\n");
