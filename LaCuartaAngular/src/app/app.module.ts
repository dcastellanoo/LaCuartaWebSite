import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";


//Firebase configuration



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ContactComponent } from './contact/contact.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { FoodOrdersComponent } from './food-orders/food-orders.component';
import { TodoPdfComponent } from './todo-pdf/todo-pdf.component';
import { FoodOrdersModule } from "./food-orders/food-orders.module";
import { CartSummaryComponent } from "./cart-summary/cart-summary.component";
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FoodOrdersFirstGuard } from "./foodOrdersFirst.guard";
import { BebidasMenuComponent } from './bebidas-menu/bebidas-menu.component';
import { VinosMenuComponent } from './vinos-menu/vinos-menu.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { Reservations2Component } from './reservations2/reservations2.component';
import {ReservationService} from "./services/reservation.service";
import { Reservations3Component } from './reservations3/reservations3.component';
import { Reservations4Component } from './reservations4/reservations4.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'sobre-nosotros', component: AboutUsComponent },
  { path: 'carta', component: FoodMenuComponent },
  //{ path: 'pedidos', component: PedidosComponent },
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

  { path: "admin",
    loadChildren: () => import("./admin/admin.module")
      .then(m => m.AdminModule),
  },

  { path: '**', redirectTo: '/' },
]


@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageFooterComponent,
    AboutUsComponent,
    HomePageComponent,
    ReservationsComponent,
    ContactComponent,
    FoodMenuComponent,
    TodoPdfComponent,
    BebidasMenuComponent,
    VinosMenuComponent,
    Reservations2Component,
    Reservations3Component,
    Reservations4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule
  ],
  providers: [
    ReservationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Tutorial: Build Web Apps with Angular (part 2) - https://aep22.ulpgc.es/mod/folder/view.php?id=1708384

