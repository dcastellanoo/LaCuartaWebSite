import { Injectable } from "@angular/core";
import { Product } from "./product.model";
// import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";
import {FirebaseDatasource} from "./firebase.datasource";

@Injectable({
  providedIn: 'root'
})

export class ProductRepository {
  private products: Product[] = [];
  //private categories: string[] = [];
  private categories: Map<string, Set<string>> = new Map<string, Set<string>>();

  constructor(private dataSource: FirebaseDatasource) {
    dataSource.getProducts().subscribe(data => {
      this.products = data;

      //this.categories = data.map(p => p.category as string)
      //  .filter((c, index, array) => array.indexOf(c) == index).sort();


      data.forEach((p) => {
        if ( this.categories.get(p.type!) == undefined )
          this.categories.set(p.type!, new Set<string>([p.category!]));
        else
          this.categories.get(p.type!)!.add(p.category!);
      })
      console.log("Found categories:", this.categories);

      //console.log(Array.from(this.categories.get("comida")!.values()));
    });
  }

  /**
   * Get products by category or type
   * @param category
   * @param type
   */
  getProducts(category?: string, type?: string): Product[] {
    if ( category )
      return this.products.filter(p => p.category == category );
    else if ( type )
      return this.products.filter(p => p.type == type);
    else
      return this.products;
    //return this.products
    //  .filter(p => category == undefined || category == p.category);
  }

  getProductsByType(type?: string): Product[] {
    return this.products
      .filter(p => p.type == type);
  }

  getProduct(id: string): Product {
    return this.products.find(p => p.id == id) as Product;
  }

  /**
   * Get list of categories by type if provided, else every product category
   * @param type product type
   */
  getCategories(type?: string): string[] {
    if ( type && this.categories.has(type) )
        return Array.from(this.categories.get(type)!.values());
    else {
      let categories: string[] = [];

      this.categories.forEach((value: Set<string>, key: string) => {
        categories = [...categories, ...Array.from(value.values())];
      });
      return categories
    }
  }

  saveProduct(product: Product) {
    if ( product.id == null || product.id == "" ) {
      // Add new product
      this.dataSource.saveProduct(product)
        .subscribe(p => {
          this.products.push(p)
        });
    } else {
      // Remove old version of product and insert new one
      this.dataSource.updateProduct(product)
        .subscribe(p => {
          this.products.splice(this.products.
          findIndex(p => p.id == product.id), 1, product);
        });
    }
  }

  deleteProduct(id: string) {
    this.dataSource.deleteProduct(id).subscribe(p => {
      this.products.splice(this.products.
      findIndex(p => p.id == id), 1);
    })
  }
}

