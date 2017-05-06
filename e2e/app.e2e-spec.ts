import { FirstAngularCliPage } from './app.po';

describe('first-angular-cli App', function() {
  let page: FirstAngularCliPage;

  beforeEach(() => {
    page = new FirstAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
