import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

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


const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'sobre-nosotros', component: AboutUsComponent },
  { path: 'carta', component: FoodMenuComponent },
  { path: 'reservas', component: ReservationsComponent},
  { path: 'pedidos', component: FoodOrdersComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'politica-de-privacidad', component: TodoPdfComponent },
  { path: 'politica-de-cookies', component: TodoPdfComponent },
  { path: 'aviso-legal', component: TodoPdfComponent },
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
    FoodOrdersComponent,
    TodoPdfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
