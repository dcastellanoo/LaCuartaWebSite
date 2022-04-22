import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Product } from "./product.model";
import { Cart } from "./cart.model";
import {IOrder, Order} from "./order.model";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})

export class FirebaseDatasource {
  auth_token?: string;
  productsRef: AngularFirestoreCollection<Product>;
  ordersRef: AngularFirestoreCollection<IOrder>;

  constructor(private store: AngularFirestore ) {
    console.log("Firebase datasource created");
    this.productsRef = store.collection("menu");
    this.ordersRef = store.collection("orders");
  }

  /********************************** Products **********************************/

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

  /********************************** Orders **********************************/

  saveOrder(order: Order): Observable<Order> {
    console.log("Saving order to Firebase datasource");
    // TODO save order as nested object
    this.ordersRef.add({...order});
    return this.ordersRef.doc(order.id!).valueChanges() as Observable<Order>;
  }

  getOrders(): Observable<Order[]> {
    return this.ordersRef.valueChanges({idField: "id"}) as Observable<Order[]>;
  }

  updateOrder(order: Order): Observable<Order> {
    // TODO update order as nested object

    this.ordersRef.doc(order.id!).update({...order});
    return this.ordersRef.doc(order.id!).valueChanges() as Observable<Order>;
  }

  deleteOrder(id: string): Observable<Order> {
    // TODO delete nested order object
    this.ordersRef.doc(id).delete();
    return this.ordersRef.doc(id).valueChanges() as Observable<Order>;
  }

  /********************************** Authentication **********************************/
  // TODO maybe move to separate file
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
}
