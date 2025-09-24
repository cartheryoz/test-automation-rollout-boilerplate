import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Home page title contains Playwright', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  const title = await homePage.getTitle();
  expect(title).toContain('Playwright');
});
