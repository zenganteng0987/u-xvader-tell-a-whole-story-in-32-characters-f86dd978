import { mkdirSync, writeFileSync } from "node:fs";

// Wi-Fi name entry: a divorce in two sentences — he took the dog,
// she took the Wi-Fi. Exactly 32 characters, the gate maximum.
const entry = "He took the dog. I took the WiFi";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
