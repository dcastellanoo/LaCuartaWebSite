import {Observable} from "rxjs";
import {Product} from "../model/product.model";
import {Order} from "../model/order.model";

export interface IDatasource {
  saveProduct: (product: Product) => Observable<Product>
  getProducts: () => Observable<Product[]>
  updateProduct: (product: Product) => Observable<Product>
  deleteProduct: (id: string) => Observable<Product>

  saveOrder: (order: Order) => Observable<Order>
  getOrders: () => Observable<Order[]>
  updateOrder: (order: Order) => Observable<Order>
  deleteOrder: (id: string) => Observable<Order>
}
