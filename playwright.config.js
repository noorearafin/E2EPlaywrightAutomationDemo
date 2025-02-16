// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',

  /*Maximum tie one test can run for. */
  timeout:30 *1000,
  expect:{

    timeout:5000

  },
 
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
   
    browserName : 'chromium',
    headless : false,
    screenshot : 'on',
    trace : 'retain-on-failure'

  },

});
