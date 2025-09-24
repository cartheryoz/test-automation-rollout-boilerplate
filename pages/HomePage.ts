import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly url: string = 'https://playwright.dev';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }
}
