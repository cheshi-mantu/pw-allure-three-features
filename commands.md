## install deps

```shell
pnpm install --frozen-lockfile

pnpm exec playwright install

pnpm install allure
```

## Run tests


```shell
pnpm allure run --config=./allurerc.mjs -- pnpm test

```

## open report

```shell
pnpm allure open
```


## Clear reports from Jira

```shell
pnpm allure jira clear --issue AE-3 --reports --results
```
