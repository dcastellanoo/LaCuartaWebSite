import { Component, OnInit } from '@angular/core';
import {ProductRepository} from "../model/product.repository";
import {Router} from "@angular/router";
import {Product} from "../model/product.model";
import {SelectedCategoryService} from "../services/menu.service";

@Component({
  selector: 'app-vinos-menu',
  templateUrl: './vinos-menu.component.html',
  styleUrls: ['./vinos-menu.component.css']
})
export class VinosMenuComponent implements OnInit {
  public selectedCategory?: string;
  public listOfCategories: string[];
  public listOfFood: string[];
  constructor(private repository: ProductRepository,
              private router: Router, private selectedservice: SelectedCategoryService ) {
    this.listOfCategories = ["Vino Blanco", "Vino Tinto"];
    this.listOfFood = ["Entrantes", "Principales", "Sugerencias", "Postres"];
  }

  products(newCategory: string): Product[] {
    this.selectedCategory = newCategory;
    //let pageIndex = (this.selectedPage - 1) * this.productsPerPage;

    let food: Product[] = this.repository.getProducts(this.selectedCategory, "vino");

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
