import { Component } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {Product} from "./model/product.model";
import { collection, doc, setDoc } from "firebase/firestore";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'LaCuartaAngular';

  constructor(private store: AngularFirestore) {
    store.firestore.settings({ ignoreUndefinedProperties: true, merge: true });

    //console.log("New id:", this.store.createId());

    /*
    let menuRef = this.store.collection("menu");
    let products: Product[];
    menuRef.valueChanges({idField: 'productId'}).subscribe(data => {
      products = data as Product[];
      console.log(products);
    });



    console.log(this.store.collection("menu").doc("4").valueChanges().subscribe(data => {
      console.log("TEST:", data);
    }))

    this.store.collection("menu").snapshotChanges()
      .pipe( map(changes => changes.map(c => ({
        id: c.payload.doc.id,
        ...(c.payload.doc.data() as Product) }) ) ) )
      .subscribe(data => {
        products = data as Product[];
        console.log(products);
      });
      */
  }
}

