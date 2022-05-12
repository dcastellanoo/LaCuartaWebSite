import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {FirebaseDatasource} from "../services/firebase.datasource";
import {User} from "./user.model";

@Injectable({
  providedIn: 'root'
})

export class UserRepository {
  private users: User[] = [];
  private loaded: boolean = false;

  constructor(private dataSource: FirebaseDatasource) {
    this.loadUsers();
  }

  loadUsers() {
    this.loaded = true;
    this.dataSource.getUsers().subscribe(users => {
      this.users = users
    });
  }

  getUsers(): User[] {
    if (!this.loaded) {
      this.loadUsers();
    }
    return this.users;
  }

  // TODO make a query to database to not load all the users
  getUserByEmail(email: string): User | undefined {
    this.getUsers();
    return this.users.find(u => u.email == email);
  }

  saveUser(user: User): Observable<User> {
    return this.dataSource.saveUser(user, user.id!);
  }

  updateUser(user: User) {
    this.dataSource.updateUser(user).subscribe(user => {
      this.users.splice(this.users.
      findIndex(u => u.id == user.id), 1, user);
    });
  }

  deleteUser(id: string) {
    this.dataSource.deleteUser(id).subscribe(user => {
      this.users.splice(this.users.findIndex(u => id == u.id), 1);
    });
  }
}
