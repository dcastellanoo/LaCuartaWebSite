import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ReservationRepository} from "../model/reservation.repository";
import {Router} from "@angular/router";
import {EDayPeriod, Reservation} from "../model/reservation.model";
import {User} from "../model/user.model";
import {ReservationService} from "../services/reservation.service";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservas1 = this.fb.group({
    num_adults : 2,
    num_children: 0,
    datepicker: Date,
  });
  people = this.reservas1.get('num_adults')?.value + this.reservas1.get('num_children')?.value;
  horario = EDayPeriod.Lunch;
  reserva: Reservation;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private repository: ReservationRepository,
    private rs: ReservationService,
  ) {
    this.reserva = new Reservation();
  }

  ngOnInit(): void {
  }

  onSubmitReservas1() {
    this.reserva = {
      numAdults: this.reservas1.get('num_adults')?.value,
      numChilds: this.reservas1.get('num_children')?.value,
      period: this.horario,
      reservationDate: this.reservas1.get('datepicker')?.value
    }
    this.rs.setReservation(this.reserva);
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
    this.horario = EDayPeriod.Lunch;

    document.getElementById("almuerzo")?.classList.add("selectedField");
    document.getElementById("cena")?.classList.remove("selectedField");
  }

  select_cena() {
    this.horario = EDayPeriod.Dinner;

    document.getElementById("almuerzo")?.classList.remove("selectedField");
    document.getElementById("cena")?.classList.add("selectedField");
  }
}
