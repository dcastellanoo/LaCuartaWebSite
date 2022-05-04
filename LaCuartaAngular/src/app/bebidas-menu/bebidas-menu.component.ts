import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ProductRepository} from "../model/product.repository";
import {Router} from "@angular/router";
import {Product} from "../model/product.model";
import {SelectedCategoryService} from "../model/menu.service";

@Component({
  selector: 'app-bebidas-menu',
  templateUrl: './bebidas-menu.component.html',
  styleUrls: ['./bebidas-menu.component.css']
})
export class BebidasMenuComponent implements OnInit {
  public selectedCategory?: string;
  public listOfCategories: string[];
  public listOfFood: string[];
  constructor(private repository: ProductRepository,
              private router: Router, private selectedservice: SelectedCategoryService ) {
    this.listOfCategories = ["Cervezas", "Refrescos"];
    this.listOfFood = ["Entrantes", "Principales", "Sugerencias", "Postres"];

  }

  products(newCategory: string): Product[] {
    this.selectedCategory = newCategory;
    //let pageIndex = (this.selectedPage - 1) * this.productsPerPage;

    let food: Product[] = this.repository.getProducts(this.selectedCategory, "bebida");

    return food;
    //return food.slice(pageIndex, pageIndex + this.productsPerPage);
  }

  changeCategory(newCategory: string) {
    this.selectedservice.setCategory(newCategory);
    this.updateComeInChild();
  }

  updateComeInChild(){
    this.selectedservice.setComeInChild(true);
  }

  ngOnInit(): void {
  }

}
