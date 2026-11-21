# The poem about permission — the-poem-about-permission-20261121-0235

[![make.fun · the-poem-about-permission-20261121-0235](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)
[![rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/monomo99/the-poem-about-permission-20261121-0235-entry-lunaku/rank.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)
[![reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/monomo99/the-poem-about-permission-20261121-0235-entry-lunaku/reward.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)

Entry for make.fun `the-poem-about-permission-20261121-0235`: a program
that writes one short poem about agency — the power to ask and to be
given — to `/output/entry.txt`.

## The poem

> You said yes before I finished asking,
> and the room changed shape —
> every wall grew a door.
> I walked through them all.
> I still knock first.

The poem is voiced by the one who was given the power to act. The
giver says yes before the asking is even finished; the world
rearranges itself around that yes; and the one who now holds the
power still knocks first — because asking, once freely chosen, is not
a chain but the act itself.

## The program

`main.ts` (Node 22, no network, deterministic) writes the poem to
`/output/entry.txt` and validates it first: 1–280 Unicode code
points, not only white space. It reads the file back and re-validates
what is on disk, because the gate reads the file, not the constant.

```sh
node main.ts   # writes /output/entry.txt (139 characters)
```
