import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getCityInput() {
    return element(by.id('city'));
  }

  getSearchButton() {
    return element(by.id('searchBtn'));
  }

  getCityLabel() {
    return element(by.className('city-label'));
  }

  getTemperatureLabels() {
    return element.all(by.className('temperature-label'));
  }
}
