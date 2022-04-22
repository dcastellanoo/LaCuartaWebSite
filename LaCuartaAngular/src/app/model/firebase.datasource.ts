import { Injectable } from "@angular/core";
import {BehaviorSubject, from, Observable, of} from "rxjs";
import { Product } from "./product.model";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { map } from "rxjs/operators";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import {IDatasource} from "./interface.datasource";
import {onAuthStateChanged} from "@angular/fire/auth";
const PROTOCOL = "http";
const PORT = 3500;


const getObservable = (collection: AngularFirestoreCollection<Product>) => {
  const subject = new BehaviorSubject<Product[]>([]);
  collection.valueChanges({ idField: 'id' }).subscribe((val: Product[]) => {
    subject.next(val);
  });
  return subject;
};

@Injectable({
  providedIn: 'root'
})

export class FirebaseDatasource {
  baseUrl: string;
  auth_token?: string;
  productsRef: AngularFirestoreCollection<Product>;
  //productIdMap: Map<number, string>;

  constructor(private store: AngularFirestore, private http: HttpClient ) {

    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;

    console.log("Firebase datasource created");
    this.productsRef = store.collection("menu");

    /*
    this.productIdMap = new Map<number, string>();
    this.productsRef.valueChanges({idField: 'productId'}).subscribe((data) => {
      data.forEach(p => {
        this.productIdMap.set(p.id!, p.productId);
      })
    })   */
  }

  /** Products **/

  saveProduct(product: Product): Observable<Product> {
    this.productsRef.add({...product});
    return this.productsRef.doc(product.id!).valueChanges() as Observable<Product>;
  }

  getProducts(): Observable<Product[]> {
    console.log("Reading products from Firebase datasource");
    return this.productsRef.valueChanges({idField: "id"}) as Observable<Product[]>;
  }

  updateProduct(product: Product): Observable<Product> {
    this.productsRef.doc(product.id!).update({...product});
    return this.productsRef.doc(product.id!).valueChanges() as Observable<Product>;

  }

  deleteProduct(id: string): Observable<Product> {
    this.productsRef.doc(id).delete();
    return this.productsRef.doc(id).valueChanges() as Observable<Product>;
  }

  /** Orders **/

  saveOrder(order: Order): Observable<Order> {
    console.log("Saving order to Rest datasource");
    return this.http.post<Order>(this.baseUrl + "orders", order);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + "orders", this.getOptions());
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.baseUrl}orders/${order.id}`,
      order, this.getOptions());
  }

  deleteOrder(id: number): Observable<Order> {
    return this.http.delete<Order>(`${this.baseUrl}orders/${id}`,
      this.getOptions());
  }

  // TODO move to separate file
  authenticate(email: string, password: string): Observable<boolean> {
    const auth = getAuth();
    let response = false;
    return from(signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("Admin signed in with email: ", email);
        const user = userCredential.user;
        this.auth_token = user.uid;  // TODO


        return true;

        /* TODO
        user.getIdToken().then((result) => {
          console.log("Admin with auth token: ", result);
          this.auth_token = result;
        });
        */

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error authentication: ", errorMessage);
        return false;
      }));



  }

  /*
  authenticate(user: string, pass: string): Observable<boolean> {


    return this.http.post<any>(this.baseUrl + "login", {
      name: user, password: pass
    }).pipe(map(response => {
      this.auth_token = response.success ? response.token : null;
      return response.success;
    }));
  }

  */


  private convertProductId(id: number) {
   // return this.productIdMap.get(id);
  }
  private getOptions() {
    return {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.auth_token}>`
      })
    }
  }
}
