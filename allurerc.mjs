import { defaultChartsConfig, defineConfig } from "allure";

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
  qualityGate: {
    rules: [
      {
        maxFailures: 3,
        fastFail: true,
      },
    ],
  },
  plugins: {
    awesomeAll: {
      import: "@allurereport/plugin-awesome",
      options: {
        reportName: "Very genuine fake tests, no SMS",
        singleFile: false,
        reportLanguage: "en",
        open: false,
        groupBy: ["epic","feature","story"],
        charts: chartLayout,
      },
    },
    awesomeEpicProjects: {
      import: "@allurereport/plugin-awesome",
      options: {
        reportName: "Epic Projects",
        singleFile: false,
        reportLanguage: "en",
        open: false,
        charts: chartLayout,
        filter: ({ labels }) => labels.find(({ name, value }) => name === "epic" && value === "Projects"),
      },
    },
    awesomeEpicTestCases: {
      import: "@allurereport/plugin-awesome",
      options: {
        reportName: "Epic Test Cases",
        singleFile: false,
        reportLanguage: "en",
        open: false,
        charts: chartLayout,
        filter: ({ labels }) => labels.find(({ name, value }) => name === "epic" && value === "Test Cases"),
      },
    },
    awesomeJava: {
      import: "@allurereport/plugin-awesome",
      options: {
        reportName: "Java Tests",
        singleFile: false,
        reportLanguage: "en",
        open: false,
        charts: chartLayout,
        filter: ({ labels }) => labels.find(({ name, value }) => name === "language" && value === "java"),
      },
    },
    dashboard: {
      options: {
        singleFile: false,
        reportName: "Test run dashboard, no SMS",
        reportLanguage: "en",
        layout: defaultChartsConfig,
      },
    },
    csv: {
      options: {
        fileName: "allure-report.csv",
      },
    },
    log: {
      options: {
        groupBy: "feature",
        withTrace: false,
        allSteps: false,
      },
    },
  },
  variables: {
    env_variable: "unknown",
    greeting: "¡Hola todos!",
  },
  environments: {
    auth: {
      matcher: ({ labels }) =>
        labels.find(({ name, value }) => name === "msrv" && value === "uaa"),
    },
    report: {
      matcher: ({ labels }) =>
        labels.find(({ name, value }) => name === "msrv" && value === "report"),
    },
  },
});
