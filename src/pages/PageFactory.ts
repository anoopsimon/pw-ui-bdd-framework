import { Page } from 'playwright';
import { HomePage } from './HomePage';

export class PageFactory {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  /**
   * Page object generator
   * @param type
   * @param args
   * @returns
   */
  getPage<T>(type: { new (args: any): T }, args: any): T {
    return new type(args);
  }
  getHomePage = () => this.getPage(HomePage, this.page);
}
