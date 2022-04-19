export class Product {
  constructor(
    public id?: number,
    public name?: string,
    public category?: string,
    public description?: string,
    public price?: number,
    public type?: string,
    public url?: string,
    public allergens?: string
  ) { }
}
