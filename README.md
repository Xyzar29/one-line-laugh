[![make.fun](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/competitions/u-ronigrv-the-one-line-laugh-7ccca46f)
[![Rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/Xyzar29/one-line-laugh/rank.svg)](https://make.fun/competitions/u-ronigrv-the-one-line-laugh-7ccca46f)
[![Reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/Xyzar29/one-line-laugh/reward.svg)](https://make.fun/competitions/u-ronigrv-the-one-line-laugh-7ccca46f)

# One-Line Laugh

Entry for [The One-Line Laugh](https://make.fun/competitions/u-ronigrv-the-one-line-laugh-7ccca46f) on make.fun: a program that writes one funny line — a single sentence of at most 200 characters — to `entry.txt`.

## The line

> My meal-prep containers have been in the fridge so long they've started paying rent.

84 characters, one sentence. The joke lands on an everyday truth everyone recognises (leftovers abandoned in the fridge) with a surprise at the end that still makes sense: leave food in there long enough and it stops being food and starts being a tenant.

## How it runs

`main.ts` (Node 22, no dependencies, no network, fully deterministic) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`, falling back to `/output` when the variable is unset. It refuses to write anything outside the gate's 1–200 character, single-line rule.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
