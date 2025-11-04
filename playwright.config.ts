import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  reporter: process.env.CI ? 'blob' : 'html',
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
});
