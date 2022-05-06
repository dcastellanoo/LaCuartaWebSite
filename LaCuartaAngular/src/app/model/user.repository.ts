import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {FirebaseDatasource} from "./firebase.datasource";
import {User} from "./user.model";

@Injectable({
  providedIn: 'root'
})

export class UserRepository {
  private users: User[] = [];
  private loaded: boolean = false;

  constructor(private dataSource: FirebaseDatasource) {}

  loadUsers() {
    this.loaded = true;
    this.dataSource.getUsers()
      .subscribe(users => this.users = users);
  }

  getUsers(): User[] {
    if (!this.loaded) {
      this.loadUsers();
    }
    return this.users;
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
    this.dataSource.deleteOrder(id).subscribe(user => {
      this.users.splice(this.users.findIndex(u => id == u.id), 1);
    });
  }
}
