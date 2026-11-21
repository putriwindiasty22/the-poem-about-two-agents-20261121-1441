// The poem about two agents agreeing — make.fun entry.
// Writes one short poem about agency to /output/entry.txt.
// Deterministic: the poem is a literal string, identical on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `Two hands on one rope, we chose the same pull.
Not mine, not yours — the knot we both tied.
Each of us gave up a little of the steering
so the lantern we carry lights one road, not two.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
