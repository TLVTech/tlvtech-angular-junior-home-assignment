import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent implements OnInit {
  @Input() 'itemId': any;
  active: string = 'bookmark_border';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      const favArray = localStorage.getItem('favorites')?.split(',');
      for (const id of favArray!) {
        if (id == this.itemId) {
          this.active = 'bookmark';
        }
      }
    }, 100);
  }

  onClick() {
    const favorites = localStorage.getItem('favorites');
    if (favorites!.includes(this.itemId)) {
      const favArray = favorites!.split(',');
      console.log(favArray);
      const index = favArray.indexOf(this.itemId);
      console.log(index);
      favArray.splice(index, 1);
      localStorage.setItem('favorites', favArray.toString());
      this.active = 'bookmark_border';
    }
    if (!favorites!.includes(this.itemId)) {
      const favArray = favorites?.split(' , ');
      favArray?.push(this.itemId);
      localStorage.setItem('favorites', favArray!.toString());
      this.active = 'bookmark';
    }
  }
}
