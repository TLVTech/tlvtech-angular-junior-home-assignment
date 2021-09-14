import { Component, OnInit } from '@angular/core';
import { GetApiService } from 'src/app/services/get-api.service';

@Component({
  selector: 'app-favourites-page',
  templateUrl: './favourites-page.component.html',
  styleUrls: ['./favourites-page.component.css'],
})
export class FavouritesPageComponent implements OnInit {
  savedItems: any[] = [];

  constructor(private api: GetApiService) {}

  ngOnInit(): void {
    const favArray = localStorage.getItem('favorites')?.split(',');

    for (const key of favArray) {
      let obj: any = {};

      this.api.apiGetCurrent(key).subscribe((data: any) => {
        obj.currentTemperature = `${data[0].Temperature.Imperial.Value}${data[0].Temperature.Imperial.Unit}`;
      });

      this.api.apiGetForecast(key).subscribe((data: any) => {
        obj.forecasts = data.DailyForecasts;
      });

      this.api.apiGetLocation(key).subscribe((data: any) => {
        obj.location = `${data.Country.EnglishName}, ${data.LocalizedName}`;
      });
      this.savedItems.push(obj);
    }

    // this.api.apiCall().subscribe((data: any) => {
    //   for (const id of favArray!) {
    //     for (const item of data) {
    //       console.log(item.id);
    //       if (item.id == id) {
    //         this.savedItems.push(item);
    //       }
    //     }
    //   }
    // });
  }
}
