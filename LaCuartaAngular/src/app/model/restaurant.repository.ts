import {FirebaseDatasource} from "./firebase.datasource";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class RestaurantRepository {
  configUrl?: string;
  data: { [key: string]: any; } = {};

  constructor(private dataSource: FirebaseDatasource) {
    this.dataSource.restaurantJSON().subscribe((data) => {
      this.data = data;

      for (let idx in data) {
        this.data[data[idx].key] = data[idx].data;
      }
    })


  }

  get restaurantInfo() {
    return this.data;
  }

  get restaurantAddress(): string {
    return this.data["restaurant-address"];
  }

  get restaurantPhone(): string {
    return this.data["restaurant-phone"];
  }

  // TODO make opening hours model to store the data to ease the access
  get restaurantHours(): { string: [{string: string}]} {
    return this.data["restaurant-time-info"];
  }

}
