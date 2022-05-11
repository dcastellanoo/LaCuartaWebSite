import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product.model';
import {NavController} from '@ionic/angular';
import {ProductRepositoryService} from '../services/product-repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  products: Product[];

  constructor(
    private navCtrl: NavController,
    private repository: ProductRepositoryService
  ) { }

  ngOnInit() {
  }

  getProducts(): Product[] {
    return this.repository.getProducts();
  }

  goToLoginPage() {
    this.navCtrl.navigateForward('/login');
  }

}
