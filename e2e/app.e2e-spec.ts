import { BannerAppPage } from './app.po';

describe('banner-app App', () => {
  let page: BannerAppPage;

  beforeEach(() => {
    page = new BannerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
