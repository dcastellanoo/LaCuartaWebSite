import { Injectable } from "@angular/core";
import {from, Observable, of} from "rxjs";
import { Product } from "./product.model";
import { Cart } from "./cart.model";
import { Order} from "./order.model";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {waitForAsync} from "@angular/core/testing";
import {User} from "./user.model";
import {IDatasource} from "./interface.datasource";
import {Reservation} from "./reservation.model";


@Injectable({
  providedIn: 'root'
})

// TODO save and load images from Firebase
export class FirebaseDatasource implements IDatasource {
  auth_token?: string;
  productsRef: AngularFirestoreCollection<Product>;
  ordersRef: AngularFirestoreCollection<Order>;
  reservationRef: AngularFirestoreCollection<Reservation>;

  constructor(private store: AngularFirestore ) {
    console.log("Firebase datasource created");
    this.productsRef = store.collection("menu");
    this.ordersRef = store.collection("orders");
    this.reservationRef = store.collection("reservations");
  }

  /********************************** Products **********************************/

  saveProduct(product: Product): Observable<Product> {
    let productId = this.store.createId()

    product.id = productId;
    this.productsRef.doc(productId).set({
      ...product
    });

    return this.productsRef.doc(productId).valueChanges() as Observable<Product>;
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
    let product: Product = new Product(id);
    this.productsRef.doc(id).valueChanges().subscribe((p) => {
      product = p!;
      }
    );

    this.productsRef.doc(id).delete();
    return of(product);
  }

  /********************************** Orders **********************************/

  saveOrder(order: Order): Observable<Order> {
    console.log("Saving order to Firebase datasource");
    let orderId = this.store.createId()
    order.id = orderId;
    this.ordersRef.doc(orderId).set(JSON.parse(JSON.stringify(order)));

    return this.ordersRef.doc(orderId).valueChanges() as Observable<Order>;
  }

  getOrders(): Observable<Order[]> {
    return this.ordersRef.valueChanges({idField: "id"}) as Observable<Order[]>;
  }

  updateOrder(order: Order): Observable<Order> {
    this.ordersRef.doc(order.id!).update(JSON.parse(JSON.stringify(order)));
    return this.ordersRef.doc(order.id!).valueChanges() as Observable<Order>;
  }

  deleteOrder(id: string): Observable<Order> {
    // Quick fix, dummy order with correct id
    let order: Order = new Order(new User(), new Cart());
    order.id = id;
    this.ordersRef.doc(id).valueChanges().subscribe((o) => {
        order = o!;
      }
    );
    return of(order);
  }

  /********************************** Reservations **********************************/

  saveReservation(reservation: Reservation): Observable<Reservation> {
    console.log("Saving reservations to Firebase datasource");
    let reservationId = this.store.createId()
    reservation.id = reservationId;
    this.reservationRef.doc(reservationId).set(JSON.parse(JSON.stringify(reservation)));

    return this.reservationRef.doc(reservationId).valueChanges() as Observable<Reservation>;
  }

  getReservations(): Observable<Reservation[]> {
    return this.reservationRef.valueChanges({idField: "id"}) as Observable<Reservation[]>;
  }

  updateReservation(reservation: Reservation): Observable<Reservation> {
    this.reservationRef.doc(reservation.id!).update(JSON.parse(JSON.stringify(reservation)));
    return this.reservationRef.doc(reservation.id!).valueChanges() as Observable<Reservation>;
  }

  deleteReservation(id: string): Observable<Reservation> {
    // Quick fix, dummy reservation with correct id
    let reservation: Reservation = new Reservation(new User());
    reservation.id = id;
    this.reservationRef.doc(id).valueChanges().subscribe((r) => {
        reservation = r!;
      }
    );
    return of(reservation);
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
