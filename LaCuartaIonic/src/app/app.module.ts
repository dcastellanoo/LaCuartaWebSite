import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';
import {PageHeaderComponent} from './page-header/page-header.component';
import {PageFooterComponent} from './page-footer/page-footer.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ReservationsComponent} from './reservations/reservations.component';
import {FoodMenuComponent} from './food-menu/food-menu.component';
import {ContactComponent} from './contact/contact.component';
import {TodoPdfComponent} from './todo-pdf/todo-pdf.component';
import {BebidasMenuComponent} from './bebidas-menu/bebidas-menu.component';
import {VinosMenuComponent} from './vinos-menu/vinos-menu.component';
import {Reservations2Component} from './reservations2/reservations2.component';
import {Reservations3Component} from './reservations3/reservations3.component';
import {Reservations4Component} from './reservations4/reservations4.component';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReservationService} from './services/reservation.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


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
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ReservationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
