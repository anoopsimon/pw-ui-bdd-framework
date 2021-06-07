import { Page } from "playwright";


export class BasePage {
    defaultScreenshotDirectory: string;
    page: Page;
    constructor(page:Page) {
        this.page = page;
        this.defaultScreenshotDirectory = 'C:/Temp';
    }

    async goto(url: string) {
        await this.page.goto(url);
    }

    async fill(locator: string, text: string) {
        await this.page.fill(locator, text);
    }

    async press(locator: string, key: string) {
        await this.page.press(locator, key);
    }

    async text(locator: string) {
        return await this.page.textContent(locator)
    }

    async screenshot(fullPage: boolean) {
        await this.page.screenshot({ path: this.defaultScreenshotDirectory + '/pw_ss.png', fullPage: fullPage });

    }

    async elementScreenshot(locator: string) {
        const elementHandle = await this.page.$(locator);
        await elementHandle?.screenshot({ path: this.defaultScreenshotDirectory + '/pw_ss.png' });

    }

    async screenshotBase64() {
        const buffer = await this.page.screenshot();
        return buffer.toString('base64');
    }


}