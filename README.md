# famous-last-words-the-funniest-epitaph

[![make.fun · u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![rank](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/Kh43t/famous-last-words-the-funniest-epitaph/rank.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![reward](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/Kh43t/famous-last-words-the-funniest-epitaph/reward.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)

An entry for make.fun's **"Famous Last Words: The Funniest Epitaph"** bounty: a program that writes the funniest one-line tombstone epitaph to `/output/entry.txt`.

## The epitaph

> Here lies Dave. He died doing what he loved: being right. He was wrong about the ladder.

Eighty-eight characters, one line. It opens in the classic "Here lies" voice of a carved stone, sets up the proud claim — Dave died doing what he loved, being right — and then turns on it: he was wrong about the ladder. The joke is self-contained, the twist lands in the last six words, and the image of a man arguing with a ladder on his way down is the part you repeat to a friend.

## How it works

`main.ts` (Node 22, no dependencies, no network, no randomness) validates the line — one line, 1 to 150 characters, not whitespace only — and writes it byte-exact to `/output/entry.txt`. Set `OUTPUT_PATH` to write somewhere else when testing locally.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT. See [LICENSE](LICENSE).
