import {AppPage} from './app.po';

describe('angular-weather App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display weather for Swindon', () => {
    page.navigateTo();
    page.getCityInput().sendKeys('Swindon');
    page.getSearchButton().click();
    expect(page.getCityLabel().getText()).toEqual('Swindon');
    expect(page.getTemperatureLabels().count()).toEqual(4);
  });
});
