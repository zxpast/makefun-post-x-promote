// Entry for post-x-promote-make-your-own-bounty-01 (Node 22, standard library only).
// The entry is the X post itself: one post of our own on X that quotes make.fun's
// make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646),
// with a photo attached, @makefunai and a make.fun link and our play code
// (makefun-opal-keystone-quail) in its text. This program copies POST.json from
// the repository root to /output/POST.json, where the gate reads it and reads the
// post's replies, reposts and quotes from X — then reads the copy back and checks
// it is valid JSON with a non-empty string url, so a bad hand-in fails loudly
// here instead of silently passing a broken address to the gate. Nothing this
// program writes about the post is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SOURCE = join(BOT_DIR, 'POST.json');
const DEST = join(OUTPUT_DIR, 'POST.json');

function fail(message: string): never {
  console.error(`POST.json check failed: ${message}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(SOURCE, DEST);
} catch (err) {
  fail(`could not copy ${SOURCE} to ${DEST}: ${(err as Error).message}`);
}

let raw: string;
try {
  raw = readFileSync(DEST, 'utf8');
} catch (err) {
  fail(`could not read back ${DEST}: ${(err as Error).message}`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch (err) {
  fail(`${DEST} is not valid JSON: ${(err as Error).message}`);
}

if (
  typeof parsed !== 'object' ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== 'string' ||
  ((parsed as { url: string }).url.trim().length === 0)
) {
  fail(`${DEST} has no non-empty string "url" field`);
}

console.log(`POST.json OK: ${(parsed as { url: string }).url}`);
