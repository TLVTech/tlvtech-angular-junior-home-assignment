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
  resultItem: any = {};
  displayElement: boolean = true;

  handleSearch() {
    this.displayElement = false;
    this.api.apiCall().subscribe((data: any) => {
      this.results = [];
      for (const item of data) {
        if (item.title.toLowerCase().includes(this.search.toLowerCase())) {
          this.results.push(item);
        }
      }
    });
  }

  handleResult(id: string) {
    this.api.apiCall().subscribe((data: any) => {
      for (const item of data) {
        if (item.id === id) {
          this.results = [];
          this.resultItem = item;

          const favorites = localStorage.getItem('favorites');
          if (favorites!.includes(item.id)) {
          } else {
          }
        }
      }
    });
    this.displayElement = true;
  }

  constructor(private api: GetApiService) {}

  ngOnInit(): void {
    if (!this.resultItem.id) {
      this.displayElement = false;
    }
  }
}

interface City {
  title: string;
  id: any;
}
