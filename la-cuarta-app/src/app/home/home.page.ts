import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product.model';
import {NavController} from '@ionic/angular';
import {ProductRepositoryService} from '../services/product-repository.service';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {AuthenticationService} from '../services/authentication.service';
import {UserRepositoryService} from '../services/user-repository.service';
import {User} from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  selectedCategory: string;
  currentUser: User;

  constructor(
    private navCtrl: NavController,
    private productRepo: ProductRepositoryService,
    private userRepo: UserRepositoryService,
    private authService: AuthenticationService,
  ) {
    this.selectedCategory = undefined;
  }

  get categories(): string[] {
    return this.productRepo.getCategories('comida');
  }

  userInfo(id: string): User {
    return this.userRepo.getUserById(id);
  }


  ngOnInit() {
  }


  getProducts(): Product[] {
    return this.productRepo.getProducts(this.selectedCategory, 'comida');
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  goToLoginPage() {
    this.navCtrl.navigateForward('/login');
  }

  logout() {
    this.authService.logout();
  }

}
