import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { OrderRepository } from "../model/order.repository";
import { Order } from "../model/order.model";
import {UserRepository} from "../model/user.repository";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  orderSent: boolean = false;
  submitted: boolean = false;

  constructor(public repository: OrderRepository, public userRepo: UserRepository, public order: Order) {}

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.repository.saveOrder(this.order).subscribe(order => {
        console.log("Saved order:", order);

        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }

  emailCheck(email: string) {
    console.log("Checking if email <", email, "> exists in database.");

    const user = this.userRepo.getUserByEmail(email);
    if ( user ) {
      console.log("Found user:", user);

      this.order.user = user;
    }
  }
}
