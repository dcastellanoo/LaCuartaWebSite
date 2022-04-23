/*
var RESERVATION_PARAMS = {
    num_adults: 2,
    num_childs: 0,
    time_lunch: false,
    time_dinner: true,
    reservation_date: new Date(),
    dinning_hall: false,
    terrace: true,
    reservation_time: "",
    comment: "",
    conditions_accepted: false,
    remember_user: false,
};
 */

import {User} from "./user.model";

export class Reservation {
  public id?: string;
  public numAdults: number = 2;
  public numChilds: number = 2;



  constructor(public user: User) {
  }

}
