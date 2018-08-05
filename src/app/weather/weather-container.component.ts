import {Component} from '@angular/core';
import {WeatherService} from './weather.service';
import {Weather} from '../model/weather';

@Component({
  selector: 'app-weather',
  template: `
    <app-search (searchTriggered)="citySearch($event)"></app-search>
    <app-results *ngIf="weather" [weather]="weather"></app-results>
  `
})
export class WeatherContainerComponent {
  weather: Weather;

  constructor(private weatherService: WeatherService) {
  }

  citySearch(city: string) {
    this.weatherService.searchWeatherForCity(city)
      .subscribe(weather => {
        this.weather = weather;
      });
  }
}
