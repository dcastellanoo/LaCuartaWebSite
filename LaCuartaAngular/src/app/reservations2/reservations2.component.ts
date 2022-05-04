import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ReservationService} from "../services/reservation.service";
import {EDayPeriod, Reservation} from "../model/reservation.model";
import {FormBuilder} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {RestaurantRepository} from "../model/restaurant.repository";
import {ReservationTimes} from "../model/opening-time.model";


@Component({
  selector: 'app-reservations2',
  templateUrl: './reservations2.component.html',
  styleUrls: ['./reservations2.component.css']
})
export class Reservations2Component implements OnInit {
  reservation: Reservation;
  people: number;
  horario: string;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private rs: ReservationService,
    private restaurant: RestaurantRepository,
  ) {
    this.reservation = this.rs.getReservation();
    this.people = this.reservation.numAdults + this.reservation.numChilds;
    if (this.reservation.period == EDayPeriod.Lunch){
      this.horario = "Almuerzo";
    } else {
      this.horario = "Cena";
    }
  }

  ngOnInit(): void {
    console.log(this.reservation);
    console.log(this.lunch_times);
  }

  onSubmitReservas2() {
  }


  get lunch_times() : ReservationTimes {
    return this.restaurant.reservationTimes;
  }

  returnToReservas1() {
    this.router.navigate(['reservas'])
  }
}
