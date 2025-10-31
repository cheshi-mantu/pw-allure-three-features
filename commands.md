## install deps

```shell
pnpm install --frozen-lockfile

pnpm exec playwright install
```

## Run tests


```shell
pnpm allure run --config=./allurerc.mjs -- pnpm test

```

## Clear reports from Jira

```shell
pnpm allure jira clear --issue AE-3 --reports --results
```
