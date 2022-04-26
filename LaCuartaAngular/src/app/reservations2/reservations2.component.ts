import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservations2',
  templateUrl: './reservations2.component.html',
  styleUrls: ['./reservations2.component.css']
})
export class Reservations2Component implements OnInit {
  reservas2: any;

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmitReservas2() {

  }

  returnToReservas1() {
    this.router.navigate(['reservas'])
  }
}
