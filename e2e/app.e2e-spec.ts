import { IPaulPhotographyPage } from './app.po';

describe('i-paul-photography App', () => {
  let page: IPaulPhotographyPage;

  beforeEach(() => {
    page = new IPaulPhotographyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
