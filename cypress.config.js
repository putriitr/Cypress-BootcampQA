const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = {
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    setupNodeEvents(on, config) {
      mochawesome(on);
    },
    supportFile: 'cypress/support/e2e.js', 
  },
  mochawesomeReporterOptions: {
    reportDir: 'cypress/results', 
    overwrite: true,
    html: false,  
    json: true,  
  },
};
