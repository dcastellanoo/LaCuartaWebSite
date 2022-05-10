import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { FoodOrdersComponent } from "./food-orders/food-orders.component";

@Injectable()
export class FoodOrdersFirstGuard {
  private firstNavigation = true;

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    if ( this.firstNavigation ) {
      this.firstNavigation = false;
      if ( route.component != FoodOrdersComponent ) {
        this.router.navigateByUrl("pedidos");
        return false;
      }
    }
    return true;
  }
}
