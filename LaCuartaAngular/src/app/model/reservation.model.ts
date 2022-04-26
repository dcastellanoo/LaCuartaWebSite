import {User} from "./user.model";

export enum EDayPeriod {
  Lunch,
  Dinner,
}

export enum EPlace {
  DinningHall,
  Terrace
}

export class Reservation {
  public id?: string;
  public numAdults: number = 2;
  public numChilds: number = 0;
  public period: EDayPeriod = EDayPeriod.Lunch;
  public place: EPlace = EPlace.DinningHall;
  public reservationDate?: Date;
  public reservationTime?: Date;
  public comment?: string;

  // TODO maybe move to user?
  public acceptedConditions: boolean = false;
  public rememberUser: boolean = false;


  constructor(public user: User) {
  }

}
