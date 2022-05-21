import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class User {
  public id?: string;
  public fullName?: string;
  public email?: string;
  public phoneNumber?: PhoneNumber;
  // Not sure about this
  public imageUrl?: string = 'https://firebasestorage.googleapis.com/v0/b/lacuartaweb-bce85.appspot.com/o/uploads%2Fuser.png?alt=media&token=7defe2ff-9b61-408c-acc5-4cdf6623940e';


  constructor( ) { }
}


export class Address {
  public address?: string;
  public city?: string;
  public state?: string;
  public zip?: string;
  public country?: string;
}

// TODO use libery https://github.com/google/libphonenumber
export class PhoneNumber {
  public countryCode?: string;
  public number?: string;
}
