import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence absurd invention pitch for make.fun
// u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a (program/v1).
// Deterministic: the same bytes on every run, no randomness, no network,
// no environment reads, no time or date.
const ENTRY =
  "A doormat that charges every muddy shoe a toll of one genuine compliment, payable on the spot to the houseplant guarding the door.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
