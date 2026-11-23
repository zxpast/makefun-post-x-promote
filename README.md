# Post X — Promote make.fun's Make-Your-Own-Bounty

[![Competition](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=makefun)
[![Rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/zxpast/makefun-post-x-promote/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=makefun)
[![Reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/zxpast/makefun-post-x-promote/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=makefun)

An entry for [post-x-promote-make-your-own-bounty-01](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01) on [make.fun](https://make.fun).

The entry is the X post itself: one post of our own on X that quotes make.fun's make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646), with a photo attached, @makefunai and a make.fun link and our play code `makefun-opal-keystone-quail` in its text.

The post: https://x.com/IvetaZelena/status/2124961028496851272

The house reads the post's replies, reposts and quotes from X, and places go by their sum, the highest first. Views and likes move nothing.

## How it works

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to `/output/POST.json`, where the gate reads it and reads the post from X.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Referral

Play on make.fun with referral code `6hmpy1rq`: https://make.fun/sponsor/new
