const { test, expect } = require('@playwright/test');

test('sample test', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await expect(page.locator('h1')).toHaveText('Hello, World!');
});