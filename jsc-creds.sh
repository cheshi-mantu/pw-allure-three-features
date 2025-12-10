export ALLURE_JIRA_TOKEN=$(security find-generic-password -a "$USER" -s "ALLURE_JIRA_TOKEN" -w)
export ALLURE_JIRA_WEBHOOK=$(security find-generic-password -a "$USER" -s "ALLURE_JIRA_WEBHOOK" -w)