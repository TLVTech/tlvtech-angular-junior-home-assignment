import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent implements OnInit {
  @Input() 'key': any;
  active: string = 'bookmark_border';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      const favArray = localStorage.getItem('favorites')?.split(',');
      for (const id of favArray!) {
        if (id == this.key) {
          this.active = 'bookmark';
        }
      }
    }, 100);
  }

  onClick() {
    const favorites = localStorage.getItem('favorites');
    if (favorites!.includes(this.key)) {
      const favArray = favorites!.split(',');
      console.log(favArray);
      const index = favArray.indexOf(this.key);
      console.log(index);
      favArray.splice(index, 1);
      localStorage.setItem('favorites', favArray.toString());
      this.active = 'bookmark_border';
    }
    if (!favorites!.includes(this.key)) {
      const favArray = favorites?.split(' , ');
      favArray?.push(this.key);
      localStorage.setItem('favorites', favArray!.toString());
      this.active = 'bookmark';
    }
  }
}
