import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence absurd invention pitch for make.fun
// u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a (program/v1).
// Revised: "charges ... payable" tightened to "fines ... paid on the spot",
// and the houseplant is now the bouncer — the toll, the payer and the
// collector land in one breath instead of three.
// Deterministic: the same bytes on every run, no randomness, no network,
// no environment reads, no time or date.
const ENTRY =
  "A doormat that fines every muddy shoe a toll of one genuine compliment, paid on the spot to the houseplant bouncer guarding the door.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
