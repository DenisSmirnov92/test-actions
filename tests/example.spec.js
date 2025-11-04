import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});

test('basic test2', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveURL('https://example.com');
});
