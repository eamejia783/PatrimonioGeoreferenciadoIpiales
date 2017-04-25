import { PatrimonioGeoreferenciadoIpialesPage } from './app.po';

describe('patrimonio-georeferenciado-ipiales App', () => {
  let page: PatrimonioGeoreferenciadoIpialesPage;

  beforeEach(() => {
    page = new PatrimonioGeoreferenciadoIpialesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
