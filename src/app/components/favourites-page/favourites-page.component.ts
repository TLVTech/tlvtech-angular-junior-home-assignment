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

    this.api.apiCall().subscribe((data: any) => {
      for (const id of favArray!) {
        for (const item of data) {
          //console.log(item.id);
          if (item.id == id) {
            this.savedItems.push(item);
          }
        }
      }
    });
    console.log(this.savedItems);
  }
}
