import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {FoodMenuComponent} from './food-menu/food-menu.component';
import {BebidasMenuComponent} from './bebidas-menu/bebidas-menu.component';
import {VinosMenuComponent} from './vinos-menu/vinos-menu.component';
import {ReservationsComponent} from './reservations/reservations.component';
import {Reservations2Component} from './reservations2/reservations2.component';
import {Reservations3Component} from './reservations3/reservations3.component';
import {Reservations4Component} from './reservations4/reservations4.component';
import {FoodOrdersComponent} from './food-orders/food-orders.component';
import {CartDetailComponent} from './cart-detail/cart-detail.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {ContactComponent} from './contact/contact.component';
import {TodoPdfComponent} from './todo-pdf/todo-pdf.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'sobre-nosotros', component: AboutUsComponent },
  { path: 'carta', component: FoodMenuComponent },
  { path: 'bebidas', component: BebidasMenuComponent },
  { path: 'vinos', component: VinosMenuComponent },
  { path: 'carta', component: FoodMenuComponent },
  { path: 'reservas', component: ReservationsComponent},
  { path: 'reservas2', component: Reservations2Component},
  { path: 'reservas3', component: Reservations3Component},
  { path: 'reservas4', component: Reservations4Component},
  { path: 'pedidos',
    component: FoodOrdersComponent,
    children: [
    ],
    canActivate: []
  },
  { path: 'carrito', component: CartDetailComponent,
    canActivate: [] },

  { path: 'checkout', component: CheckoutComponent,
    canActivate: [] },

  { path: 'contacto', component: ContactComponent },
  { path: 'politica-de-privacidad', component: TodoPdfComponent },
  { path: 'politica-de-cookies', component: TodoPdfComponent },
  { path: 'aviso-legal', component: TodoPdfComponent },

  { path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule),
  },

  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)       //{ preloadingStrategy: PreloadAllModules }
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
