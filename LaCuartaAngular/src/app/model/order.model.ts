import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";
import { User } from "./user.model";

export interface IOrder {
  id?: string
  user?: User
  shipped?: boolean
  cart?: Cart
}

@Injectable({
  providedIn: 'root'
})

export class Order {
  public id?: string;
  public shipped: boolean = false;

  constructor(public user: User, public cart: Cart) { }


  clear() {
    this.id = undefined;
    // TODO this.user.clear();
    this.shipped = false;
    this.cart.clear();
  }
}
