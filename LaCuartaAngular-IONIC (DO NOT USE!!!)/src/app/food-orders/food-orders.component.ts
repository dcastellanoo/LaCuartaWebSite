import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { Cart } from "../model/cart.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-food-orders',
  templateUrl: './food-orders.component.html',
  styleUrls: ['./food-orders.component.css']
})

export class FoodOrdersComponent {
  public selectedCategory?: string;
  //public productsPerPage = 4;
  //public selectedPage = 1;

  constructor(private repository: ProductRepository,
              private cart: Cart,
              private router: Router ) {
    this.selectedCategory = this.categories[0];
  }

  get products(): Product[] {
    //let pageIndex = (this.selectedPage - 1) * this.productsPerPage;

    let food: Product[] = this.repository.getProducts(this.selectedCategory, "comida");

    return food;
    //return food.slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories("comida");
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  /*
  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number {
    return Math.ceil(this.repository
      .getProducts(this.selectedCategory, "comida").length / this.productsPerPage)
  }      */

  addProductToCart(product: Product, quantity: number = 1 ) {
    this.cart.addLine(product, quantity);
    this.router.navigateByUrl("/carrito");
  }

  // Not ideal place to be
  parseInt(str: string) {
    return parseInt(str);
  }
}
