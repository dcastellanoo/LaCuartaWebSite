import { Injectable } from "@angular/core";
import {from, Observable, of} from "rxjs";
import { Product } from "./product.model";
import { Cart } from "./cart.model";
import { Order} from "./order.model";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import {User} from "./user.model";
import {IDatasource} from "./interface.datasource";
import {Reservation} from "./reservation.model";
import {IFileUpload} from "./file-upload.model";
import firebase from "firebase/compat";
import UserCredential = firebase.auth.UserCredential;



@Injectable({
  providedIn: 'root'
})

// TODO save and load images from Firebase
export class FirebaseDatasource implements IDatasource {
  auth_token?: string;
  productsRef: AngularFirestoreCollection<Product>;
  ordersRef: AngularFirestoreCollection<Order>;
  reservationRef: AngularFirestoreCollection<Reservation>;
  uploadsRef: AngularFirestoreCollection<IFileUpload>;
  usersRef: AngularFirestoreCollection<User>
  restaurantRef: AngularFirestoreCollection<any>;

  constructor(private store: AngularFirestore ) {
    console.log("Firebase datasource created");
    this.productsRef = store.collection("menu");
    this.ordersRef = store.collection("orders");
    this.reservationRef = store.collection("reservations");
    this.uploadsRef = store.collection("uploads");
    this.restaurantRef = store.collection("restaurant");
    this.usersRef = store.collection("users");
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
    return this.productsRef.valueChanges({idField: "id"});
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

    this.ordersRef.doc(id).delete();

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
    let reservation: Reservation = new Reservation();
    reservation.id = id;
    this.reservationRef.doc(id).valueChanges().subscribe((r) => {
        reservation = r!;
      }
    );

    this.reservationRef.doc(id).delete();

    return of(reservation);
  }

  /********************************** Users **********************************/
  saveUser(user: User, userId: string): Observable<User> {
    console.log("Saving user to Firebase datasource");
    user.id = userId;
    this.usersRef.doc(userId).set(user);

    return this.usersRef.doc(userId).valueChanges() as Observable<User>;
  }

  getUsers(): Observable<User[]> {
    return this.usersRef.valueChanges({idField: "id"}) as Observable<User[]>;
  }

  updateUser(user: User): Observable<User> {
    this.usersRef.doc(user.id!).update(user);
    return this.usersRef.doc(user.id!).valueChanges() as Observable<User>;
  }

  deleteUser(id: string): Observable<User> {
    // Quick fix, dummy reservation with correct id
    let user: User = new User();
    user.id = id;
    this.usersRef.doc(id).valueChanges().subscribe((r) => {
        user = r!;
      }
    );

    this.usersRef.doc(id).delete();

    return of(user);
  }

  /********************************** Firebase Storage **********************************/
  restaurantJSON(): Observable<any>  {
    /*
    const collection = this.store.collection<IFileUpload>(
      'uploads',
        ref => ref.where('name', '==', "restaurant.json"))

    const uploads = collection
      .valueChanges()
      .pipe(
        map( upload => {
          const restaurantDoc = upload[0];
          return restaurantDoc;
        })
      );
    return uploads;

     */

    return this.restaurantRef.valueChanges({idField: "key"})
  }


  /********************************** Authentication **********************************/
  // TODO maybe move to separate file
  authenticate(email: string, password: string): Observable<boolean> {
    const auth = getAuth();
    let response = false;

    return from(signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // TODO check if it's admin account
        if ( user.uid != "JHkGXbGH3IWQi0bUJJTwaa9r1j33" ) {
          return false;
        }

        console.log("Admin signed in with email: ", email);
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

  // TODO
  createUserAccount(user: User): Observable<string> {
    const auth = getAuth();
    const password = Math.random().toString(36).slice(-8);

    return from(createUserWithEmailAndPassword(auth, user.email!, password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        return userCredential.user.uid;
        // ...
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log("Problem with registering new user ", user.email, ": ", error.message);
        return "";
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
