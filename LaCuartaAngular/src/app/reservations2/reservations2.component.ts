import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ReservationService} from "../services/reservation.service";
import {EDayPeriod, Reservation} from "../model/reservation.model";
import {FormBuilder} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";


@Component({
  selector: 'app-reservations2',
  templateUrl: './reservations2.component.html',
  styleUrls: ['./reservations2.component.css']
})
export class Reservations2Component implements OnInit {
  reservation: Reservation;
  people: number;
  horario: string;
  reservation_times: string[];

  constructor(
    private fb: FormBuilder,
    public router: Router,
    public rs: ReservationService,
    public db: AngularFirestore,
  ) {
    this.reservation = this.rs.getReservation();
    this.people = this.reservation.numAdults + this.reservation.numChilds;
    if (this.reservation.period == EDayPeriod.Lunch){
      this.horario = "Almuerzo";
      this.reservation_times = this.db.collectionGroup('restaurant').
    } else {
      this.horario = "Cena";
    }
  }

  ngOnInit(): void {
    console.log(this.reservation);
  }

  onSubmitReservas2() {
  }

  returnToReservas1() {
    this.router.navigate(['reservas'])
  }
}
