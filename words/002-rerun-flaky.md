# What if tests fail

![fine](fine.jpg)

## Script

[Egor:]

1. We changed the way tests are being executed.
2. Allure3 does not appear at the end

## As it was

```shell
pnpm test
# install java to your JS/TS/pytest/whatever pipeline
allure generate
allure open
```

[Audience:] indistinct chatter...

## As is

```shell
pnpm allure run --rerun 3 -- pnpm test

```

[Egor:]

- So, if during the execution some tests will fail, allure3 will request rerun of these tests.

[Audience:]

- Stop talking!
- Show us the good stuff!!

[NARRATOR:]

- Does he remember to switch to the branch where tests are failing like it's their last day?

## run

```shell\
git checkout clusterFailure
pnpm allure run --config=./allurerc.mjs --rerun 3 -- pnpm test
```

[back to toc](!toc.md/#allure3-highlights)