import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ReservationService} from "../services/reservation.service";
import {Reservation} from "../model/reservation.model";
import {FormBuilder} from "@angular/forms";
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
  reservas2 = this.fb.group({
    hour: '',
  });

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private rs: ReservationService,
    private restaurant: RestaurantRepository,
  ) {
    this.reservation = this.rs.getReservation();
    this.people = this.reservation.numAdults + this.reservation.numChilds;
  }

  ngOnInit(): void {
    console.log(this.reservation);
  }

  onSubmitReservas2() {
    this.reservation = {
      user: this.reservation.user,
      comment: "", reservationEmail: "", reservationName: "", reservationPhone: "",
      period: this.reservation.period,
      numAdults: this.reservation.numAdults,
        numChilds: this.reservation.numChilds,
        reservationDate: this.reservation.reservationDate,
        reservationTime: this.reservas2.get('hour')?.value.split("-")[1],
        place: this.reservas2.get('hour')?.value.split("-")[0]
    };

    console.log(this.reservation);
    this.rs.setReservation(this.reservation);
    this.router.navigate(['/reservas3']);
  }


  get getReservationTimes() : ReservationTimes {
    let reservation_times: ReservationTimes = this.restaurant.reservationTimes;
    return reservation_times;
  }

  returnToReservas1() {
    this.router.navigate(['reservas'])
  }
}
