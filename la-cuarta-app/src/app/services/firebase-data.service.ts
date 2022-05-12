import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {Product} from '../models/product.model';
import {Observable, of} from 'rxjs';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {
  productsRef: AngularFirestoreCollection<Product>;
  usersRef: AngularFirestoreCollection<User>;


  constructor(private store: AngularFirestore) {
    this.productsRef = store.collection('menu');
    this.usersRef = store.collection('users');
  }


  /********************************** Products **********************************/

  getProducts(): Observable<Product[]> {
    return this.productsRef.valueChanges({idField: 'id'});
  }

  /********************************** Users **********************************/

  // TODO save credit card info in secure way
  saveUser(user: User, userId: string): Observable<User> {
    console.log('Saving user to Firebase datasource');
    user.id = userId;
    this.usersRef.doc(userId).set(JSON.parse(JSON.stringify(user)));

    return this.usersRef.doc(userId).valueChanges() as Observable<User>;
  }

  getUsers(): Observable<User[]> {
    return this.usersRef.valueChanges({idField: 'id'}) as Observable<User[]>;
  }

  updateUser(user: User): Observable<User> {
    this.usersRef.doc(user.id).update(JSON.parse(JSON.stringify(user)));
    return this.usersRef.doc(user.id).valueChanges() as Observable<User>;
  }
}
