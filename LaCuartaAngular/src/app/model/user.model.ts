import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class User {
  public name?: string;
  public address?: string;
  public city?: string;
  public state?: string;
  public zip?: string;
  public country?: string;

  constructor( ) { }
}
