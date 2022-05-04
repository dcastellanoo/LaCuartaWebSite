import { Component, OnInit, OnDestroy } from '@angular/core';
import {ProductRepository} from "../model/product.repository";
import {Router} from "@angular/router";
import {Product} from "../model/product.model";
import { Cart } from "../model/cart.model";
import {SelectedCategoryService} from "../model/menu.service";


@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {
  public selectedCategory?: string;
  public listOfCategories: string[];
  constructor(private repository: ProductRepository,
              private router: Router, private selectedservice: SelectedCategoryService) {
   // inject service

    this.listOfCategories = ["Entrantes", "Principales", "Sugerencias", "Postres"];

    if (this.selectedservice.getComeInChild() === true){
      this.selectedCategory=this.selectedservice.getCategory();
      this.updateComeInChild();
    } else {
      this.selectedCategory = this.listOfCategories[0];
    }
  }

  get products(): Product[] {

    let food: Product[] = this.repository.getProducts(this.selectedCategory, "comida");

    return food;
    //return food.slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories("comida");
  }

  updateComeInChild(){
    this.selectedservice.setComeInChild(false);
  }

  changeCategory(newCategory: string) {
    this.selectedservice.setCategory(newCategory);
    this.selectedCategory=this.selectedservice.getCategory();
  }



  ngOnInit(): void {

  }

}
