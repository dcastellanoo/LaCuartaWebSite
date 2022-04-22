import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestDataSource } from "./rest.datasource";
import {FirebaseDatasource} from "./firebase.datasource";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private datasource: FirebaseDatasource) {}

  authenticate(username: string, password: string): Observable<boolean> {
    return this.datasource.authenticate(username, password);
  }

  get authenticated(): boolean {
    return this.datasource.auth_token != undefined;
  }

  clear() {
    this.datasource.auth_token = undefined;
  }
}
