export ALLURE_JIRA_WEBHOOK=$(cat ./secrets/webhook.txt)
export ALLURE_JIRA_TOKEN=$(cat ./secrets/jira.token)

pnpm allure jira clear --issue ARFJ-3 --reports --results