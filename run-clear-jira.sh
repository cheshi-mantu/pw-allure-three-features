export ALLURE_JIRA_WEBHOOK=$(cat ./secrets/webhook.txt)
export ALLURE_JIRA_TOKEN=$(cat ./secrets/jira.token)

pnpm allure jira clear --token ${ALLURE_JIRA_TOKEN} --issue ARFJ-3 --reports --results

