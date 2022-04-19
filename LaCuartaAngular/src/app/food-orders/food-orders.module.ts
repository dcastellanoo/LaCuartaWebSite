import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { FoodOrdersComponent } from "./food-orders.component";
import { CounterDirective } from "../counter.directive";
import { CartSummaryComponent } from "../cart-summary/cart-summary.component";
import { CartDetailComponent } from "../cart-detail/cart-detail.component";
import { CheckoutComponent } from "../checkout/checkout.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule ],
  declarations: [FoodOrdersComponent,
    CounterDirective, CartSummaryComponent,
    CartDetailComponent, CheckoutComponent],
  exports: [FoodOrdersComponent, CartDetailComponent, CheckoutComponent]
})

export class FoodOrdersModule { }
