import {Injectable} from '@angular/core';
import {WeatherService} from './weather.service';
import {of} from 'rxjs/observable/of';
import {Weather} from '../model/weather';

@Injectable()
export class WeatherServiceMock extends WeatherService {

  constructor() {
    super(null);
  }

  searchWeatherForCity(city) {
    return of(<Weather>{city: {name: city}});
  }

}
