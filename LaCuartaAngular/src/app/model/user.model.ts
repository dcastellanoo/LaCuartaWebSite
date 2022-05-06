import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class User {
  public id?: string;
  public fullName?: string;
  public address?: Address = new Address();
  public email?: string;
  public phoneNumber?: PhoneNumber;
  public numTarjeta?: string;
  public fechaExpiracion?: string;
  public cvv?: string;
  public rememberMe: boolean = false;

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
