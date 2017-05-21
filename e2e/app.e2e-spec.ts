import { MediaWatchAppPage } from './app.po';

describe('media-watch-app App', function() {
  let page: MediaWatchAppPage;

  beforeEach(() => {
    page = new MediaWatchAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
