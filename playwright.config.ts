import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  retries: 2,
  reporter: 'html',
  use: {
    ...devices['Desktop Chrome'],
    headless: true,
  },
  testDir: './tests',
};

export default config;
