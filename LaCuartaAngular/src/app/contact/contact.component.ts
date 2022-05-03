import { Component, OnInit } from '@angular/core';
import {RestaurantRepository} from "../model/restaurant.repository";
import {OpeningSchedule} from "../model/opening-time.model";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  week = [
    ["monday", "Lunes"],
    ["tuesday", "Martes"],
    ["wednesday", "Miércoles"],
    ["thursday", "Jueves"],
    ["friday", "Viernes"],
    ["saturday", "Sábado"],
    ["sunday", "Domingo"]
  ]

  private weekMap = {
    "monday": "Lunes",
    "tuesday": "Martes",
    "wednesday": "Miércoles",
    "thursday": "Jueves",
    "friday": "Viernes"
  }

  constructor(private repository: RestaurantRepository) {
  }

  get address(): string {
    return this.repository.restaurantAddress;
  }

  get phone(): string {
    return this.repository.restaurantPhone;
  }

  get opening_hours(): OpeningSchedule {
    let schedule: OpeningSchedule = this.repository.restaurantHours;
    return schedule;
  }



  ngOnInit(): void {
  }

}
