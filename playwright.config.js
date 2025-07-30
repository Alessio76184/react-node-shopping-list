// playwright.config.js

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    testDir: './playwright-tests',
    timeout: 30000,
    expect: {
      timeout: 5000,
    },
    use: {
      baseURL: 'http://localhost:3000',
      headless: true,
      viewport: { width: 1280, height: 720 },
    },
    ignore: ['**/backend/**', '**/frontend/**'],
  };
  
  module.exports = config;
  