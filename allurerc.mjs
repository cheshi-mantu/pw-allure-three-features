import { defaultChartsConfig, defineConfig } from "allure";
import os from 'os';

const chartLayout = [
  {
    type: "trend",
    dataType: "status",
    mode: "percent",
  },
  {
    type: "trend",
    dataType: "status",
    limit: 10,
  },
  {
    title: "Custom Status Trend",
    type: "trend",
    dataType: "status",
    mode: "percent",
    limit: 15,
  },
  {
    type: "trend",
    dataType: "status",
    limit: 15,
    metadata: {
      executionIdAccessor: (executionOrder) => `build-${executionOrder}`,
      executionNameAccessor: (executionOrder) => `build #${executionOrder}`,
    },
  },
  {
    type: "trend",
    dataType: "severity",
    limit: 15,
  },
  {
    type: "pie",
  },
  {
    type: "pie",
    title: "Custom Pie",
  },
];

export default defineConfig({
  name: "Allure Report",
  output: "./allure-report",
  historyPath: "./history.jsonl",
  plugins: {
    awesome: {
      options: {
        reportName: "Very genuine fake tests, no SMS",
        singleFile: false,
        reportLanguage: "en",
        open: false,
        charts: chartLayout,
      },
    },
    dashboard: {
      options: {
        singleFile: false,
        reportName: "Test run dasboard, no SMS",
        reportLanguage: "en",
        layout: defaultChartsConfig,
      },
    },
        jira: {
      options: {
        issue: "ARFJ-4",
        webhook: process.env.ALLURE_JIRA_WEBHOOK,
        token: process.env.ALLURE_JIRA_TOKEN,
        uploadReport: true,
        uploadResults: true
      },
    },
    csv: {
      options: {
        fileName: "allure-report.csv",
      }
    },
    log: {
      options: {
        groupBy: "feature",
        withTrace: false,
        allSteps: false
      },
    }
  },
  variables: {
    env_variable: "unknown",
    os: os.platform(),
    os_arch: os.arch() ,
    greeting: "¡Hola todos!"
  },
  environments: {
    auth: {
      matcher: ({ labels }) => labels.find(({ name, value }) => name === "msrv" && value === "uaa"),
    },
    report: {
      matcher: ({ labels }) => labels.find(({ name, value }) => name === "msrv" && value === "report"),
    },
  }
});
