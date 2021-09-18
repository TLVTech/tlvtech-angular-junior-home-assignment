import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Weather App';

  ngOnInit() {
    let favorites: any = localStorage.getItem('favorites');

    if (favorites === null) {
      favorites = localStorage.setItem('favorites', ' ');
    }
  }
}
