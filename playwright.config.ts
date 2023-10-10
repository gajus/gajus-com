import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  testDir: './src/e2e',
  timeout: 60_000,
  use: {
    baseURL: 'http://127.0.0.1:3000',
  },
  webServer: {
    command: 'pnpm run dev',
    reuseExistingServer: true,
    url: 'http://127.0.0.1:3000',
  },
});
