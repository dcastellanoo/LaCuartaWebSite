import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";

@Injectable({
  providedIn: 'root'
})

export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data.map(p => p.category as string)
        .filter((c, index, array) => array.indexOf(c) == index).sort();
    });
  }
  getProducts(category?: string): Product[] {
    return this.products
      .filter(p => category == undefined || category == p.category);
  }

  getProduct(id: number): Product {
    return this.products.find(p => p.id == id) as Product;
  }

  getCategories(): string[] {
    return this.categories;
  }
}
