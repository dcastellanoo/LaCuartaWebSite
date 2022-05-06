import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../services/reservation.service";
import {Router} from "@angular/router";
import {Reservation} from "../model/reservation.model";

@Component({
  selector: 'app-reservations4',
  templateUrl: './reservations4.component.html',
  styleUrls: ['./reservations4.component.css']
})
export class Reservations4Component implements OnInit {
  reservation: Reservation;

  constructor(
    private rs: ReservationService,
    public router: Router,
  ) {
    this.reservation = this.rs.getReservation();
  }

  ngOnInit(): void {
  }

}
