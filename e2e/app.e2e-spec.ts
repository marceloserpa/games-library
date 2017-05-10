import { GamesLibraryPage } from './app.po';

describe('games-library App', () => {
  let page: GamesLibraryPage;

  beforeEach(() => {
    page = new GamesLibraryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
