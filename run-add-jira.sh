export ALLURE_JIRA_WEBHOOK=$(cat ./secrets/webhook.txt)
export ALLURE_JIRA_TOKEN=$(cat ./secrets/jira.token)


pnpm allure run --config=./allurerc.mjs -- pnpm test

if [ $? -ne 0 ]; then
    echo "Tests failed. Exiting..."
    exit 1
fi

pnpm allure generate --config=./allurerc.mjs

pnpm allure open --config=./allurerc.mjs