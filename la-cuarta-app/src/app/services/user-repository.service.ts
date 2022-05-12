import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import {FirebaseDataService} from './firebase-data.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoryService {
  private users: User[] = [];
  private loaded: boolean = false;

  constructor(private database: FirebaseDataService) {
    this.loadUsers();
  }

  loadUsers() {
    this.loaded = true;
    this.database.getUsers().subscribe(users => {
      this.users = users;
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
    return this.users.find(u => u.email === email);
  }

  getUserById(id: string): User | undefined {
    this.getUsers();
    return this.users.find(u => u.id === id);
  }

  saveUser(user: User): Observable<User> {
    return this.database.saveUser(user, user.id);
  }

  updateUser(user: User) {
    this.database.updateUser(user).subscribe(resp => {
      this.users.splice(this.users.
      findIndex(u => u.id === resp.id), 1, user);
    });
  }
}
