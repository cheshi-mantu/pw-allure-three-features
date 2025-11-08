# What if tests fail but it's delivery time, dudes?

![fine](responsibility.jpg)

## Script

[Egor:]

1. We are not limited by the watching of the tests status, we also can help taking actions
2. We added quality gate to allure3

## What I gotta do to stop 'em

```json
  qualityGate: {
    rules: [
      {
        maxFailures: 2,
        fastFail: true
      },
    ],
  },
```

Or create your own rule!

[Audience:] indistinct chatter...

[A horse snorts nervously in the darkness.]

## Let's try

```shell
git checkout qg
./run.sh

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
pnpm allure run --rerun 3 -- pnpm test
```


[back to toc](!toc.md/#allure3-highlights)