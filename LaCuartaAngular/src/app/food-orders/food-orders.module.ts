import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { FoodOrdersComponent } from "./food-orders.component";
import {CounterDirective} from "../counter.directive";
import {CartSummaryComponent} from "../cart-summary/cart-summary.component";

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [FoodOrdersComponent, CounterDirective, CartSummaryComponent],
  exports: [FoodOrdersComponent]
})

export class FoodOrdersModule { }
