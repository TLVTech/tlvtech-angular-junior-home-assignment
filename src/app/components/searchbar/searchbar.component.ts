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

  handleSearch() {
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
        }
      }
    });
  }

  constructor(private api: GetApiService) {}

  ngOnInit(): void {}
}

interface City {
  title: string;
  id: any;
}
