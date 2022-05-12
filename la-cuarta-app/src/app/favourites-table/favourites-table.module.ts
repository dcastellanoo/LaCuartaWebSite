import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouritesTablePageRoutingModule } from './favourites-table-routing.module';

import { FavouritesTablePage } from './favourites-table.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouritesTablePageRoutingModule
  ],
  declarations: [FavouritesTablePage]
})
export class FavouritesTablePageModule {}
