import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetApiService {
  constructor(private http: HttpClient) {}

  apiAutoComplete(searchInput: string) {
    return this.http.get(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=sPZRCClgEwiTa7wHkRo8t0aUfKPZ542M&q=${searchInput}`
    );
  }

  apiGetCurrent(key: string) {
    return this.http.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=sPZRCClgEwiTa7wHkRo8t0aUfKPZ542M`
    );
  }

  apiGetForecast(key: string) {
    return this.http.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=sPZRCClgEwiTa7wHkRo8t0aUfKPZ542M`
    );
  }

  apiGetLocation(key: string) {
    return this.http.get(
      `http://dataservice.accuweather.com/locations/v1/${key}?apikey=sPZRCClgEwiTa7wHkRo8t0aUfKPZ542M`
    );
  }
}
