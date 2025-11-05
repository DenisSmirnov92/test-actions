import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  reporter: process.env.CI ? [['blob'], ['github']] : [['html', { open: 'never' }], ['list']],
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  fullyParallel: true,
  use: {
    trace: 'on-first-retry',
  },
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
});
