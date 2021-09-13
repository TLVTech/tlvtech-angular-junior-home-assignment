import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchbarComponent } from '../app/components/searchbar/searchbar.component';
import { FavouritesPageComponent } from './components/favourites-page/favourites-page.component';

const routes: Routes = [
  { path: '', component: SearchbarComponent },
  { path: 'favorites', component: FavouritesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
