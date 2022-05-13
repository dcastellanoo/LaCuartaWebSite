import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {SqlCrudService} from '../services/sql-crud.service';
import {ProductRepositoryService} from '../services/product-repository.service';

@Component({
  selector: 'app-favourites-table',
  templateUrl: './favourites-table.page.html',
  styleUrls: ['./favourites-table.page.scss'],
})
export class FavouritesTablePage implements OnInit {

  constructor(
    private sqlCrud: SqlCrudService,
    private productRepo: ProductRepositoryService,
    private authService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.sqlCrud.getAllFavouritesForUser(this.authService.userDetails().uid);
    console.log('Favourite list:', this.sqlCrud.favourites);
  }

}
