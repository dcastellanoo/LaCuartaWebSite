import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {Reservation} from "./reservation.model";
import {FirebaseDatasource} from "../services/firebase.datasource";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})

export class ReservationRepository {
  private reservations: Reservation[] = [];
  private loaded: boolean = false;

  constructor(
    private dataSource: FirebaseDatasource,
  ) {}

  loadReservations() {
    this.loaded = true;
    this.dataSource.getReservations()
      .subscribe(reservations => this.reservations = reservations);
  }

  getReservations(): Reservation[] {
    if (!this.loaded) {
      this.loadReservations();
    }
    return this.reservations;
  }

  saveReservation(reservation: Reservation): Observable<Reservation> {
    if (reservation.rememberUser){
      this.dataSource.registerUser(reservation.user).subscribe((uid) => {
        if ( uid != "" )
          this.dataSource.saveUser(reservation.user, uid);
      })
    }
    return this.dataSource.saveReservation(reservation);
  }

  updateReservation(reservation: Reservation) {
    this.dataSource.updateReservation(reservation).subscribe(reservation => {
      this.reservations.splice(this.reservations.
      findIndex(r => r.id == reservation.id), 1, reservation);
    });
  }

  deleteReservation(id: string) {
    this.dataSource.deleteReservation(id).subscribe(r => {
      this.reservations.splice(this.reservations.findIndex(r => id == r.id), 1);
    });
  }
}
