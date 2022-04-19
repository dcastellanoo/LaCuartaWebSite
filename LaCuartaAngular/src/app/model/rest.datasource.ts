import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./product.model";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { map } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';
import {Comida} from "./comida.model";
import {concat} from "rxjs";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable({
  providedIn: 'root'
})

export class RestDataSource {
  baseUrl: string;
  auth_token?: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    console.log("Rest datasource created");
  }

  getProducts(): Observable<Product[]> {
    console.log("Reading products from rest datasource");

    var comidas  = this.http.get<Comida[]>(this.baseUrl + "comidas");
    var bebidas = this.http.get<Product[]>(this.baseUrl + "bebidas");

    console.log("Comidas:", comidas);
    var all_products: Observable<Product[]> = concat(comidas, bebidas);
    console.log("Products:", all_products);
    return all_products;
  }

  saveOrder(order: Order): Observable<Order> {
    console.log("Saving order to rest datasource");
    return this.http.post<Order>(this.baseUrl + "orders", order);
  }

  authenticate(user: string, pass: string): Observable<boolean> {
    return this.http.post<any>(this.baseUrl + "login", {
      name: user, password: pass
    }).pipe(map(response => {
      this.auth_token = response.success ? response.token : null;
      return response.success;
    }));
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + "products",
      product, this.getOptions());
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}products/${product.id}`,
      product, this.getOptions());
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}products/${id}`,
      this.getOptions());
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + "orders", this.getOptions());
  }

  deleteOrder(id: number): Observable<Order> {
    return this.http.delete<Order>(`${this.baseUrl}orders/${id}`,
      this.getOptions());
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.baseUrl}orders/${order.id}`,
      order, this.getOptions());
  }

  private getOptions() {
    return {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.auth_token}>`
      })
    }
  }
}