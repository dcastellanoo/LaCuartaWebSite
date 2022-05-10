import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {Product} from '../models/product.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {

  productsRef: AngularFirestoreCollection<Product>;

  constructor(private store: AngularFirestore) {
    this.productsRef = store.collection('menu');
  }


  /********************************** Products **********************************/

  getProducts(): Observable<Product[]> {
    return this.productsRef.valueChanges({idField: "id"});
  }

}
