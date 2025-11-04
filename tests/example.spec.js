import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
  await page.waitForURL('https://example.com');
});

// test('basic failed test', async ({ page }) => {
//   await page.goto('https://example.com');
//   await expect(page).toHaveTitle('Example Domain 1');
// });
