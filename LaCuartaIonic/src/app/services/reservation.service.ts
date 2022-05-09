import {Injectable, Output} from '@angular/core';
import {Reservation} from "../model/reservation.model";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  public reservation: Reservation = new Reservation();

  constructor() {

  }

  public getReservation() : Reservation{
    return this.reservation;
  }

  public setReservation(r: Reservation){
    this.reservation = r;
  }
}
