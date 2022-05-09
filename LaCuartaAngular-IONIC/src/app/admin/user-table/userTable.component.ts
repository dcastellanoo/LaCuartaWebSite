import { Component } from "@angular/core";
import { Product } from "../../model/product.model";
import { ProductRepository } from "../../model/product.repository";
import {ReservationRepository} from "../../model/reservation.repository";
import {Reservation} from "../../model/reservation.model";
import {UserRepository} from "../../model/user.repository";
import {User} from "../../model/user.model";

@Component({
  templateUrl: "userTable.component.html"
})

// TODO link to user's reservations and orders
export class UserTableComponent {
  constructor(private repository: UserRepository) { }
  getUsers(): User[] {
    return this.repository.getUsers();
  }
  deleteUser(id: string) {
    this.repository.deleteUser(id);
  }
}
