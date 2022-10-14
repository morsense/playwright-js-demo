const {
  Before,
  BeforeAll,
  AfterAll,
  After,
  setDefaultTimeout,
  World
} = require("@cucumber/cucumber");
const { chromium } = require("playwright");

setDefaultTimeout(60000);

const localServer = 'http://localhost:3301/'
// launch the browser
BeforeAll(async function () {
  global.browser = await chromium.launch({
    devtools: true,
    headless: false,
    slowMo: 1000,
  });
});

// close the browserfeatures
AfterAll(async function () {
  await global.browser.close();
});

// Create a new browser context and page per scenario
Before(async function () {
  World.context = await global.browser.newContext();
  const page = await World.context.newPage();
  await page.goto(localServer);
  World.page = page;
});

// Cleanup after each scenario
After(async function () {
  await World.page.close();
  await World.context.close();
});
