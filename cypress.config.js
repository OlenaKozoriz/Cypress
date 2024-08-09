const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //Environment variables
    env: {
      BASE_URL: "https://www.saucedemo.com/",
      USER_NAME: "standard_user",
      USER_PASSWORD: "secret_sauce",
    },
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 20000,
    fixturesFolder: "cypress / fixtures",
    screenshotsFolder: "cypress / screenshots",
    screenshotOnRunFailure: true,
    viewportHeight: 660,
    viewportWidth: 1000,
    specPattern: "**/*.cy.{js,jsx,ts,tsx}",
    reporter: "cypress-mochawesome-reporter",
    testIsolation: true,
  },
});
