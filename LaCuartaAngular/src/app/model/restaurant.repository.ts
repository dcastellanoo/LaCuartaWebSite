import {FirebaseDatasource} from "./firebase.datasource";
import {Injectable} from "@angular/core";
import {OpeningSchedule, ReservationTimes} from "./opening-time.model";

@Injectable({
  providedIn: 'root'
})

export class RestaurantRepository {
  configUrl?: string;
  data: { [key: string]: any; } = {};

  constructor(private dataSource: FirebaseDatasource) {
    this.dataSource.restaurantJSON().subscribe((data) => {
      this.data = data;

      for (let idx in this.data) {
        this.data[this.data[idx].key] = this.data[idx].data;
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

  get restaurantHours(): OpeningSchedule {
    return this.data["restaurant-time-info"] as OpeningSchedule;
  }

  get reservationTimes(): ReservationTimes {
    return this.data["reservation-times"] as ReservationTimes;
  }
}
