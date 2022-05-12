import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavouritesTablePage } from './favourites-table.page';

const routes: Routes = [
  {
    path: '',
    component: FavouritesTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavouritesTablePageRoutingModule {}
