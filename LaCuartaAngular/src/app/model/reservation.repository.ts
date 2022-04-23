import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {Reservation} from "./reservation.model";
import {FirebaseDatasource} from "./firebase.datasource";

@Injectable({
  providedIn: 'root'
})

export class ReservationRepository {
  private reservations: Reservation[] = [];
  private loaded: boolean = false;

  constructor(private dataSource: FirebaseDatasource) {}

  loadReservations() {
    this.loaded = true;
    this.dataSource.getOrders()
      .subscribe(orders => this.orders = orders);
  }

  getReservations(): Reservation[] {
    if (!this.loaded) {
      this.loadReservations();
    }
    return this.reservations;
  }

  saveReservation(reservation: Reservation): Observable<Reservation> {
    return this.dataSource.saveOrder(order);
  }

  updateReservation(order: Order) {
    this.dataSource.updateOrder(order).subscribe(order => {
      this.orders.splice(this.orders.
      findIndex(o => o.id == order.id), 1, order);
    });
  }

  deleteReservation(id: string) {
    this.dataSource.deleteOrder(id).subscribe(order => {
      this.orders.splice(this.orders.findIndex(o => id == o.id), 1);
    });
  }
}
