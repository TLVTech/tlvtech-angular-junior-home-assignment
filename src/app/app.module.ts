import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FavouritesPageComponent } from './components/favourites-page/favourites-page.component';

@NgModule({
  declarations: [AppComponent, SearchbarComponent, FavouriteComponent, ResultCardComponent, NavBarComponent, FavouritesPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
