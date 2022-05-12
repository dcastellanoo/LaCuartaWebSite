import { Injectable } from '@angular/core';
import {Product} from '../models/product.model';
import {FirebaseDataService} from './firebase-data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryService {
  private products: Product[] = [];
  private categories: Map<string, Set<string>> = new Map<string, Set<string>>();

  constructor(private database: FirebaseDataService) {
    database.getProducts().subscribe((data) => {
      this.products = data;

      console.log('Products:', this.products);

      data.forEach((p) => {
        if ( this.categories.get(p.type) === undefined ) {
          this.categories.set(p.type, new Set<string>([p.category]));
        } else {
          this.categories.get(p.type).add(p.category);
        }
      });
      console.log('Found categories:', this.categories);
    });
  }

  /**
   * Get products by category or type
   *
   * @param category
   * @param type 'comida'|'bebida'|'vino'
   */
  getProducts(category?: string, type?: string): Product[] {
    if ( category ) {
      return this.products.filter(p => p.category === category);
    } else if ( type ) {
      return this.products.filter(p => p.type === type);
    } else {
      return this.products;
    }
  }

  getProductsByType(type?: string): Product[] {
    return this.products
      .filter(p => p.type === type);
  }

  getProduct(id: string): Product {
    console.log('finding:', this.products.find(p => p.id === id));
    return this.products.find(p => p.id === id) as Product;
  }

  /**
   * Get list of categories by type if provided, else every product category
   *
   * @param type product type
   */
  getCategories(type?: string): string[] {
    if ( type && this.categories.has(type) ) {
      return Array.from(this.categories.get(type).values());
    } else {
      let categories: string[] = [];

      this.categories.forEach((value: Set<string>, key: string) => {
        categories = [...categories, ...Array.from(value.values())];
      });
      return categories;
    }
  }

  getArrUnique(category?: string, type?: string): Product[] {
    this.products = this.getProducts().filter((thing, index, self) =>
        index === self.findIndex((t) => (
          t.name === thing.name && t.type === thing.type && t.category === thing.category
        ))
    );

    return this.products;
  }



}
