# What if test fails

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

- Does he remember to switch to the branch where tests are failing?




## run

```shell\
git checkout clusterFailure
pnpm allure run --rerun 3 -- pnpm test
```





1. Watches results in real time.
2. Rebuilds the report in real time.
3. No more jumping between IDE and terminal.
4. Profit!11

[Audience:]

- Stop talking!
- Show us the good stuff!!

[Egor:]

- But I have only 6 minutes!

[Audience:]

- Show us, or sod off!

[Egor:][in a frightened manner]

- All right, all right...

[back to toc](!toc.md)