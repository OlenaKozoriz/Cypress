const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 20000,
    fixturesFolder: "cypress / fixtures",
    screenshotsFolder: "cypress / screenshots",
    screenshotOnRunFailure: true,
    viewportHeight: 660,
    viewportWidth: 1000,
    specPattern: "**/*.cy.{js,jsx,ts,tsx}",
    reporter: "spec",
    testIsolation: true,
  },
});
