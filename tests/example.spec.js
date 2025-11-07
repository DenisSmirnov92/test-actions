import { test, expect } from '@playwright/test';

test('basic test 1', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Example Domain');
});

test('basic test 2', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Example Domain');
});

test('Failed Test', async ({ page }) => {
  await page.goto('/1');
  await expect(page).toHaveTitle('Example Domain');
});
