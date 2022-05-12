import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {User} from '../models/user.model';
import {UserRepositoryService} from './user-repository.service';
import {Observable} from 'rxjs';
import firebase from 'firebase/compat';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user: Observable<firebase.User>;
  private userFire: firebase.User = undefined;

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private repository: UserRepositoryService) {
    this.user = this.afAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userFire = user;
          console.log('Current user:', this.userFire);
        }
        else {
          this.userFire = null;
        }
      }
    );
  }

  register(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password)
        .then(
          res => {
            resolve(res);
            console.log('Registered user:', res);
          },
          err => reject(err));
    });
  }

  login(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then(
          userCredentials => {
            resolve(userCredentials);
            this.userFire = userCredentials.user;
            console.log('Logged in user:', userCredentials);
          },
          err => reject(err));
    });
  }

  userDetails() {
    return this.userFire;
  }

  isLoggedIn() {
    return (!!this.userFire);
  }

  logout() {
    console.log('Logging out user:', this.userFire);
    this.afAuth.signOut()
      .then((res) => this.router.navigate(['/']));

    /*
    return new Promise<void>((resolve, reject) => {
      if (this.afAuth.currentUser) {
        this.afAuth.signOut()
          .then(() => {
            console.log('Log out');
            resolve();
          }).catch((error) => {
          reject();
        });
      }
    });

     */
  }



}
