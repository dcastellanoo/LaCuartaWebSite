import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "./order.model";
// import { StaticDataSource } from "./static.datasource";
import {RestDataSource} from "./rest.datasource";
import {FirebaseDatasource} from "./firebase.datasource";

@Injectable({
  providedIn: 'root'
})

export class OrderRepository {
  private orders: Order[] = [];
  private loaded: boolean = false;

  constructor(private dataSource: FirebaseDatasource) {}

  loadOrders() {
    this.loaded = true;
    this.dataSource.getOrders()
      .subscribe(orders => this.orders = orders);
  }

  getOrders(): Order[] {
    if (!this.loaded) {
      this.loadOrders();
    }
    return this.orders;
  }

  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }

  deleteOrder(id: string) {
    this.dataSource.deleteOrder(id).subscribe(order => {
      this.orders.splice(this.orders.findIndex(o => id == o.id), 1);
    });
  }

  updateOrder(order: Order) {
    this.dataSource.updateOrder(order).subscribe(order => {
      this.orders.splice(this.orders.
      findIndex(o => o.id == order.id), 1, order);
    });
  }
}
