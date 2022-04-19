import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

//Firebase configuration

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1SQ9h7BfE2HwY4swj_LMGpJutNmHWkjE",
  authDomain: "lacuartaweb-bce85.firebaseapp.com",
  projectId: "lacuartaweb-bce85",
  storageBucket: "lacuartaweb-bce85.appspot.com",
  messagingSenderId: "434801223606",
  appId: "1:434801223606:web:9512fef88e6e8ce99b4317",
  measurementId: "G-2G2FRFGV8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


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


const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'sobre-nosotros', component: AboutUsComponent },
  { path: 'carta', component: FoodMenuComponent,
    children: [
      { path: 'bebidas', component: BebidasMenuComponent },
      { path: 'vinos', component: VinosMenuComponent }
    ]
    },
  { path: 'reservas', component: ReservationsComponent },
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Tutorial: Build Web Apps with Angular (part 2) - https://aep22.ulpgc.es/mod/folder/view.php?id=1708384

