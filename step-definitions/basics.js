const { Given, When, Then, World } = require("@cucumber/cucumber");
const { assert } = require("chai");

Given("User view {string}", async function (url) {
  await World.page.goto(`http://localhost:3301/#/${url}`);
  assert.ok(true, true, `User can navigate to ${url} page`)
});

When("User clicks Add Institute", async function () {
  await World.page.getByRole("button", { name: "Add Institute" }).click();
});

Then("User see expectd form header", async function () {
  const headingText = await World.page.textContent("h4");
  assert.strictEqual(trimExcessWhiteSpace(headingText), "Add Institute", 'form has expectd header');
}); 

const trimExcessWhiteSpace = (s) => s.replace(/[\n\r]+|[\s]{2,}/g, " ").trim();
