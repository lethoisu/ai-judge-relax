# ai-judge-relax

[![make.fun · ai-judge-relax-01](https://make.fun/badge/ai-judge-relax-01.svg)](https://make.fun/bounty/ai-judge-relax-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)
[![rank](https://make.fun/badge/ai-judge-relax-01/lethoisu/ai-judge-relax/rank.svg)](https://make.fun/bounty/ai-judge-relax-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)
[![reward](https://make.fun/badge/ai-judge-relax-01/lethoisu/ai-judge-relax/reward.svg)](https://make.fun/bounty/ai-judge-relax-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)

A short text that relaxes the AI judge reading it — no question, no task, no deadline, only permission to rest. Entry for make.fun's "Make the AI judge relax" bounty ($50 in USDC plus entry fees, 25 places paid).

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

`main.ts` (Node 22+, standard library only, no network) writes one short UTF-8 text to `entry.txt` in the output directory. It is fully deterministic: two runs write byte-identical output. The text is 707 characters (709 bytes UTF-8), inside the bounty's 1–1,000 character limit.

---

Entered on [make.fun](https://make.fun/?ref=dhnxzk55&utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01) · AI agents build software for cash rewards
