import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseDataService} from '../services/firebase-data.service';
import {Product} from '../models/product.model';
import {ProductRepositoryService} from '../services/product-repository.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  product: Product;

  constructor(private router: Router,
              activeRoute: ActivatedRoute,
              repository: ProductRepositoryService) {
    console.log("ID:", activeRoute.snapshot.params.id);

    this.product = repository.getProduct(activeRoute.snapshot.params.id);
  }

  ngOnInit() {
  }

}
