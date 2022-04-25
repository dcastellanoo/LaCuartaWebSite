import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ReservationRepository} from "../model/reservation.repository";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservas1 = this.fb.group({
    num_adults : 2,
    num_children: 0,
    datepicker: [''],
    horario: [''],
  });
  people = this.reservas1.get('num_adults')?.value + this.reservas1.get('num_children')?.value;

  constructor(
    private fb: FormBuilder,
    private repository: ReservationRepository,
  ) {
  }

  ngOnInit(): void {
  }

  onSubmitReservas1() {
    console.log(this.reservas1.value);
    console.log(this.people);
  }

  dec_num_adultos() {
    if (this.reservas1.get('num_adults')?.value > 1){
      this.reservas1.setValue({
          num_adults : this.reservas1.get('num_adults')?.value - 1,
          num_children : this.reservas1.get('num_children')?.value,
          datepicker: this.reservas1.get('datepicker')?.value,
          horario: this.reservas1.get('horario')?.value,
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
        horario: this.reservas1.get('horario')?.value,
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
        horario: this.reservas1.get('horario')?.value,
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
        horario: this.reservas1.get('horario')?.value,
        }
      )
      this.update_people();
    }
  }

  update_people(){
    this.people = this.reservas1.get('num_adults')?.value + this.reservas1.get('num_children')?.value;
  }
}
