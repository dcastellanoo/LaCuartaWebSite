import { Injectable } from '@angular/core';
import {SqlCrudService} from './sql-crud.service';
import {ProductRepositoryService} from './product-repository.service';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FavouritesRepositoryService {

  constructor(
    private database: SqlCrudService,
    private productRepo: ProductRepositoryService
  ) { }


  async getAllFavourites(userId: string) {
    let favourites: Product[];
    await this.database.getAllFavouritesForUser(userId).then((favouritesList) => {
      for ( const elem of favouritesList ) {
        favourites.push(this.productRepo.getProduct(elem.productId));
      }
    });
    return favourites;
  }
}
