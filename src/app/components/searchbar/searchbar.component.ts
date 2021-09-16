import { Component, OnInit } from '@angular/core';
import { GetApiService } from 'src/app/services/get-api.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  search: string = '';
  results: any = [];
  displayElement: boolean = true;
  isFahrenheit: boolean = false;

  location: string = '';
  currentTemperatureImperial: string = '';
  currentTemperatureMetric: string = '';
  forecasts: any[];
  key: string = '';
  img: string = '';

  handleSearch($event: any) {
    this.displayElement = false;
    this.api
      .apiAutoComplete($event.target.elements.search.value)
      .subscribe((data: any) => {
        console.log(data);
        this.results = [];
        this.results = data;
      });
  }

  handleResult(Key: string) {
    this.key = Key;
    this.results = [];
    this.displayElement = true;

    this.api.apiGetCurrent(Key).subscribe((data: any) => {
      console.log(data);
      this.currentTemperatureImperial = `${data[0].Temperature.Imperial.Value}${data[0].Temperature.Imperial.Unit}`;
      this.currentTemperatureMetric = `${data[0].Temperature.Metric.Value}${data[0].Temperature.Metric.Unit}`;
    });

    this.api.apiGetForecast(Key).subscribe((data: any) => {
      console.log(data.DailyForecasts);
      this.forecasts = data.DailyForecasts;
    });

    this.api.apiGetLocation(Key).subscribe((data: any) => {
      console.log(data);
      this.location = `${data.Country.EnglishName}, ${data.LocalizedName}`;
    });
  }

  constructor(private api: GetApiService) {}

  ngOnInit(): void {
    this.api.getPosition().then((pos) => {
      this.api
        .apiGetGeolocation(pos.lng.toString(), pos.lat.toString())
        .subscribe((data: any) => {
          console.log(data);
          this.key = data.Key;
          this.displayElement = true;

          this.api.apiGetCurrent(this.key).subscribe((data: any) => {
            //console.log(data);
            this.currentTemperatureImperial = `${data[0].Temperature.Imperial.Value}${data[0].Temperature.Imperial.Unit}`;
            this.currentTemperatureMetric = `${data[0].Temperature.Metric.Value}${data[0].Temperature.Metric.Unit}`;
            this.img = data[0].WeatherIcon;
          });

          this.api.apiGetForecast(this.key).subscribe((data: any) => {
            //console.log(data.DailyForecasts);
            this.forecasts = data.DailyForecasts;
          });

          this.api.apiGetLocation(this.key).subscribe((data: any) => {
            //console.log(data);
            this.location = `${data.Country.EnglishName}, ${data.LocalizedName}`;
          });
        });
    });
  }
}
