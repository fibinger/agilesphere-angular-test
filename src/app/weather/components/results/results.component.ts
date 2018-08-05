import {Component, Input, OnChanges} from '@angular/core';
import {Weather} from '../../../model/weather';
import * as moment from 'moment';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnChanges {
  @Input() weather: Weather;
  forecasts: ForecastDisplay[];

  constructor() {
  }

  ngOnChanges() {
    const forecasts = this.weather.list;
    const firstIdx = forecasts.findIndex(forecast => {
      const hour = moment(forecast.dt * 1000).utc().hour();
      return hour % 6 === 0;
    });
    this.forecasts = [forecasts[firstIdx], forecasts[firstIdx + 2], forecasts[firstIdx + 4], forecasts[firstIdx + 6]]
      .map(forecast => {
        const time = moment(forecast.dt * 1000).utc();
        return {time: time.format('LT'), temperature: forecast.main.temp.toFixed(1)};
      });
  }
}

interface ForecastDisplay {
  time: string;
  temperature: string;
}
