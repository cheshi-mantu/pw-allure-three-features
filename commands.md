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

## Installing plugins

### Log

#### Add

```shell
pnpm add @allurereport/plugin-log
```

#### Run

```shell
allure log --config=./allurerc.mjs allure-results
```

### CSV

#### Add

```shell
pnpm add @allurereport/plugin-csv
```

#### Run

```shell
allure csv --config=./allurerc.mjs allure-results
```



## Clear reports from Jira

```shell
pnpm allure jira clear --issue AE-3 --reports --results
```
