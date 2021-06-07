import { ICustomWorld } from '../support/custom-world';
import { Given, When } from '@cucumber/cucumber';

Given('Go to the playwright website', async function (this: ICustomWorld) {
  await this.pageFactory?.getHomePage().navigateToPlayWright();
});

When('Change theme to {string} mode', async function (this: ICustomWorld, mode: string) {
  await this.pageFactory?.getHomePage().changeTheme(mode);
});

When(
  'I search for {string} and validate result',
  async function (this: ICustomWorld, searchTerm: string) {
    await this.pageFactory?.getHomePage().search(searchTerm);
  },
);
