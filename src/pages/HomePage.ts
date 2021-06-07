import { Page } from 'playwright';
import { BasePage } from './BasePage';
export class HomePage extends BasePage {
  page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async search(text: string) {
    let locator = "input[placeholder='Search']";
    await this.fill(locator, text);
    await this.press(locator, 'Enter');
  }

  async changeTheme(mode: string) {
    const current = await this.page.getAttribute('html', 'data-theme');
    if (current !== mode) {
      await this.page.click('.navbar >> .react-toggle');
    }
    await this.page.waitForSelector(`html[data-theme=${mode}]`);
  }

  async navigateToPlayWright() {
    await this.page.goto('https://playwright.dev');
    await this.page.waitForSelector('nav >> a >> text="Playwright"');
  }
}
