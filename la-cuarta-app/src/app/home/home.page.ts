import { Component, OnInit } from '@angular/core';
import {FirebaseDataService} from '../services/firebase-data.service';
import {Product} from '../models/product.model';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  products;

  // TODO user product repository
  constructor(
    private navCtrl: NavController,
    database: FirebaseDataService) {
    this.products = database.getProducts();
  }

  ngOnInit() {
  }

  goToLoginPage() {
    this.navCtrl.navigateForward('/login');
  }

}
