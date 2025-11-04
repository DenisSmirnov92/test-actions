import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://example.com');
  await page.waitForSelector('body');
  await expect(page).toHaveTitle('Example Domain');
});

// test('basic failed test', async ({ page }) => {
//   await page.goto('https://example.com');
//   await expect(page).toHaveTitle('Example Domain 1');
// });
