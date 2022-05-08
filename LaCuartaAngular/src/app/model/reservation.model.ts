import {User} from "./user.model";


export class Reservation {
  public id?: string;
  public numAdults: number = 2;
  public numChilds: number = 0;
  public period: string = '';
  public place: string = '';
  public reservationDate: Date = new Date();
  public reservationTime: string = '';
  public reservationName: string = '';
  public reservationEmail: string = '';
  public reservationPhone: string = '';
  public comment: string = '';
  public user: User = new User();


  // TODO maybe move to user?
  public acceptedConditions?: boolean = false;
  public rememberUser?: boolean = false;


  constructor() {
  }

}
