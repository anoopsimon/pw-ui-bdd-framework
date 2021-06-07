import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { messages } from '@cucumber/messages';
import { BrowserContext, Page } from 'playwright';
import { PageFactory } from '../pages/PageFactory';

export interface CucumberWorldConstructorParams {
  parameters: { [key: string]: string };
}

export interface ICustomWorld extends World {
  debug: boolean;
  feature?: messages.IPickle;
  context?: BrowserContext;
  page?: Page;
  pageFactory?: PageFactory;
}

export class CustomWorld extends World implements ICustomWorld {
  constructor(options: IWorldOptions) {
    super(options);
    options;
  }
  feature?: messages.IPickle;
  context?: BrowserContext;
  page?: Page;
  debug = false;
}

setWorldConstructor(CustomWorld);
