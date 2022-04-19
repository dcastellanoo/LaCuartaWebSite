import { Injectable } from "@angular/core";
import { Product } from "./product.model";
// import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSource: RestDataSource) {
    dataSource.getProducts().subscribe(data => {
      // TODO filter each type to separate field in dictionary and determine it's categories
      this.products = data;

      this.categories = data.map(p => p.category as string)
        .filter((c, index, array) => array.indexOf(c) == index).sort();
    });
  }

  getProducts(category?: string): Product[] {
    return this.products
      .filter(p => category == undefined || category == p.category);
  }

  getProductsByType(type?: string): Product[] {
    return this.products
      .filter(p => p.type == type);
  }

  getProduct(id: number): Product {
    return this.products.find(p => p.id == id) as Product;
  }

  getCategories(type?: string): string[] {
    return this.categories;
  }

  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe(p => {
      this.products.splice(this.products.
      findIndex(p => p.id == id), 1);
    })
  }

  saveProduct(product: Product) {
    if (product.id == null || product.id == 0) {
      // Add new product
      this.dataSource.saveProduct(product)
        .subscribe(p => this.products.push(p));
    } else {
      // Remove old version of product and insert new one
      this.dataSource.updateProduct(product)
        .subscribe(p => {
          this.products.splice(this.products.
          findIndex(p => p.id == product.id), 1, product);
        });
    }
  }
}

