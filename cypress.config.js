const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "chromeWebSecurity": false,
  "viewportHeight": 768,
  "viewportWidth": 1366,
  "defaultCommandTimeout": 600000,
  "video":true,
  "pageLoadTimeout": 600000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
