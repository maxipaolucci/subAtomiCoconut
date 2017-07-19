import { PropertyTesterPage } from './app.po';

describe('property-tester App', () => {
  let page: PropertyTesterPage;

  beforeEach(() => {
    page = new PropertyTesterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
