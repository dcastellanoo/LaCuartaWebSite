import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {ReservationRepository} from "../model/reservation.repository";
import {ReservationService} from "../services/reservation.service";
import {EDayPeriod, Reservation} from "../model/reservation.model";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {doc, setDoc} from "firebase/firestore";

@Component({
  selector: 'app-reservations3',
  templateUrl: './reservations3.component.html',
  styleUrls: ['./reservations3.component.css']
})
export class Reservations3Component implements OnInit {
  reservas3 = this.fb.group({
    full_name: ['', [Validators.required]],
    email_input: ['', [Validators.required, Validators.email]],
    country_code: '+34',
    phone_number: ['', [Validators.required, Validators.pattern("[0-9]{9}")]],
    comment_input: '',
    conditions_check: [false, [Validators.requiredTrue]],
    remember_check: false,
  });
  reservation: Reservation;
  people: number;
  horario: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private repository: ReservationRepository,
    private rs: ReservationService,
    private db: AngularFirestore,
  ) {
    this.reservation = this.rs.getReservation();
    this.people = this.reservation.numAdults + this.reservation.numChilds;
    if (this.reservation.period == EDayPeriod.Lunch){
      this.horario = this.reservation.reservationTime;
    } else {
      this.horario = this.reservation.reservationTime;
    }
  }

  ngOnInit(): void {
  }

  async onSubmitReservas3() {
    this.reservation = {
      reservationTime: this.reservation.reservationTime,
      numAdults: this.reservation.numAdults,
      numChilds: this.reservation.numChilds,
      reservationDate: this.reservation.reservationDate,
      reservationName: this.reservas3.get('full_name')?.value,
      reservationEmail: this.reservas3.get('email_input')?.value,
      reservationPhone: this.reservas3.get('country_code')?.value + " " + this.reservas3.get('phone_number')?.value,
      acceptedConditions: this.reservas3.get('conditions_check')?.value,
      rememberUser: this.reservas3.get('remember_check')?.value,
      comment: this.reservas3.get('comment_input')?.value,
    }
    const collection = this.db.collection('reservations');
    collection.doc(this.db.createId()).set(this.reservation);
    console.log(this.reservation);
  }

  returnToReservas2() {
    this.router.navigate(['reservas2'])
  }
}
