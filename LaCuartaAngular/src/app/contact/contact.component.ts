import { Component, OnInit } from '@angular/core';
import {RestaurantRepository} from "../model/restaurant.repository";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

// TODO load opening-hours from JSON
export class ContactComponent implements OnInit {

  constructor(private repository: RestaurantRepository) {
  }

  get address(): string {
    return this.repository.restaurantAddress;
  }

  get phone(): string {
    return this.repository.restaurantPhone;
  }

  get opening_hours(): {string: [{string: string}]} {
    console.log(this.repository.restaurantHours)
    return this.repository.restaurantHours;
  }



  ngOnInit(): void {
  }

}
