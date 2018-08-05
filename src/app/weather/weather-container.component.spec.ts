import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {WeatherContainerComponent} from './weather-container.component';
import {WeatherService} from './weather.service';
import {WeatherServiceMock} from './weather-mock.service';
import {Weather} from '../model/weather';

describe('WeatherContainer', () => {
  let component: WeatherContainerComponent;
  let fixture: ComponentFixture<WeatherContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherContainerComponent, SearchStubComponent, ResultsStubComponent],
      imports: [],
      providers: [
        {provide: WeatherService, useValue: new WeatherServiceMock()}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search for weather', () => {
    component.citySearch('Bielsko');
    expect(component.weather).toEqual(<Weather>{city: {name: 'Bielsko'}});
  });

});

@Component({selector: 'app-search', template: ''})
class SearchStubComponent {
}

@Component({selector: 'app-results', template: ''})
class ResultsStubComponent {
}
