import {Product} from "./product.model";

export class Comida extends Product {
  constructor(
    public allergens?: string,
    public url?: string
  ){
    super();
  }
}
