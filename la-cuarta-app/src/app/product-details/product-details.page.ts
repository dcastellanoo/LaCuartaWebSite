import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseDataService} from '../services/firebase-data.service';
import {Product} from '../models/product.model';
import {ProductRepositoryService} from '../services/product-repository.service';
import {SqlCrudService} from '../services/sql-crud.service';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  product: Product;
  favourite: any = undefined;

  constructor(private router: Router,
              activeRoute: ActivatedRoute,
              private productRepo: ProductRepositoryService,
              private authService: AuthenticationService,
              private sqlCrud: SqlCrudService) {
    console.log('ID:', activeRoute.snapshot.params.id);

    this.product = productRepo.getProduct(activeRoute.snapshot.params.id);
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.reloadFavourites();
  }

  isInFavourites(): boolean {
    console.log('Is favourite?', !!this.favourite);
    return !!this.favourite;
  }

  addToFavourites() {
    this.sqlCrud.addFavourite(this.product.id, this.authService.userDetails().uid);
    this.reloadFavourites();
  }

  deleteFromFavourites() {
    this.sqlCrud.deleteFavourite(this.favourite.favourite_id);
    this.reloadFavourites();
    //this.favourite = undefined;
  }

  private reloadFavourites() {
    this.sqlCrud.getAllFavouritesForUser(this.authService.userDetails().uid);
    console.log('Favourite list:', this.sqlCrud.favourites);
    setTimeout(() => {
      this.favourite = this.sqlCrud.favourites.find(fav => fav.product_id === this.product.id);
    }, 100);
    console.log('This favourite:', this.favourite);
  }

}
