const { devices, defineConfig } = require("@playwright/test");

export default defineConfig({
  testDir: "./test",
  reporter: [
    ["list"],
    ["html", { outputFolder: "./playwright-report", open: "never" }],
    [
      "allure-playwright",
      {
        resultsDir: "./allure-results",
        links: {
          issue: {
            urlTemplate: "https://qametasoftware.atlassian.net/browse/%s",
          },
        },
        environmentInfo: {
          node_version: process.version,
        },
      },
    ],
  ],
});
