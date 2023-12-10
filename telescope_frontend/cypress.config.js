const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://main--stellular-frangollo-39676b.netlify.app",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  
});
