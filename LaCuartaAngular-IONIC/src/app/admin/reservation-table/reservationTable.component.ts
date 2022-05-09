import { Component } from "@angular/core";
import { Product } from "../../model/product.model";
import { ProductRepository } from "../../model/product.repository";
import {ReservationRepository} from "../../model/reservation.repository";
import {Reservation} from "../../model/reservation.model";

@Component({
  templateUrl: "reservationTable.component.html"
})

export class ReservationTableComponent {
  constructor(private repository: ReservationRepository) { }
  getReservations(): Reservation[] {
    return this.repository.getReservations();
  }
  deleteReservation(id: string) {
    this.repository.deleteReservation(id);
  }
}
