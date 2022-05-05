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
  public period?: EDayPeriod;
  public place?: EPlace;
  public reservationDate: Date = new Date();
  public reservationTime: string = '10:30';
  public reservationName?: string;
  public reservationEmail?: string;
  public reservationPhone?: string;
  public comment?: string;


  // TODO maybe move to user?
  public acceptedConditions?: boolean = false;
  public rememberUser?: boolean = false;


  constructor() {
  }

}
