import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ReservationRepository} from "../model/reservation.repository";
import {Router} from "@angular/router";
import {Reservation} from "../model/reservation.model";
import {User} from "../model/user.model";
import {ReservationService} from "../services/reservation.service";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservas1 = this.fb.group({
    num_adults : 2,
    num_children: 0,
    datepicker: [Date, [Validators.required]],
  });
  people = this.reservas1.get('num_adults')?.value + this.reservas1.get('num_children')?.value;
  horario = 'Almuerzo';
  reservation: Reservation;

  currentDay;
  lastDay;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private repository: ReservationRepository,
    private rs: ReservationService,
  ) {
    this.reservation = new Reservation();
    var date = new Date();
    this.currentDay = { day: date.getUTCDay() + 1, month: date.getUTCMonth() + 1, year: date.getUTCFullYear()};
    this.lastDay = {day: date.getUTCDay() + 1, month: date.getUTCMonth() + 3, year: date.getUTCFullYear()};
  }

  ngOnInit(): void {
  }

  isDisabled(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 1;
  }

  onSubmitReservas1() {
    this.reservation = {
      user: this.reservation.user,
      comment: "", place: "", reservationEmail: "", reservationName: "", reservationPhone: "",
      reservationTime: this.reservation.reservationTime,
      numAdults: this.reservas1.get('num_adults')?.value,
      numChilds: this.reservas1.get('num_children')?.value,
      period: this.horario,
      reservationDate: new Date(this.reservas1.get('datepicker')?.value.year, this.reservas1.get('datepicker')?.value.month - 1, this.reservas1.get('datepicker')?.value.day)
    }
    this.rs.setReservation(this.reservation);
    this.router.navigate(['/reservas2'])
  }

  dec_num_adultos() {
    if (this.reservas1.get('num_adults')?.value > 1){
      this.reservas1.setValue({
          num_adults : this.reservas1.get('num_adults')?.value - 1,
          num_children : this.reservas1.get('num_children')?.value,
          datepicker: this.reservas1.get('datepicker')?.value,
        }
      )
      this.update_people();
    }
  }

  inc_num_adultos() {
    if (this.people < 12){
      this.reservas1.setValue({
          num_adults : this.reservas1.get('num_adults')?.value + 1,
          num_children : this.reservas1.get('num_children')?.value,
          datepicker: this.reservas1.get('datepicker')?.value,
        }
      )
      this.update_people();
    }
  }

  dec_num_children() {
    if (this.reservas1.get('num_children')?.value > 0){
      this.reservas1.setValue({
          num_adults : this.reservas1.get('num_adults')?.value,
          num_children : this.reservas1.get('num_children')?.value - 1,
          datepicker: this.reservas1.get('datepicker')?.value,
        }
      )
      this.update_people();
    }
  }

  inc_num_children() {
    if (this.people < 12){
      this.reservas1.setValue({
          num_adults : this.reservas1.get('num_adults')?.value,
          num_children : this.reservas1.get('num_children')?.value + 1,
          datepicker: this.reservas1.get('datepicker')?.value,
        }
      )
      this.update_people();
    }
  }

  update_people(){
    this.people = this.reservas1.get('num_adults')?.value + this.reservas1.get('num_children')?.value;
  }


  select_almuerzo() {
    this.horario = "Almuerzo";

    document.getElementById("almuerzo")?.classList.add("selectedField");
    document.getElementById("cena")?.classList.remove("selectedField");
  }

  select_cena() {
    this.horario = "Cena";

    document.getElementById("almuerzo")?.classList.remove("selectedField");
    document.getElementById("cena")?.classList.add("selectedField");
  }

  isWeekend() {
    const d = new Date(this.reservas1.get('datepicker')?.value.year, this.reservas1.get('datepicker')?.value.month - 1, this.reservas1.get('datepicker')?.value.day);
    if (d.getDay() == 5 || d.getDay() == 6){
      return true;
    }
    return false;
  }
}
