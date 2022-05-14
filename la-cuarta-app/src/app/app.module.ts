import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireModule} from '@angular/fire/compat';
import {environment} from '../environments/environment';
import {AuthenticationService} from './services/authentication.service';
import {HeaderComponent} from './header/header.component';
import { SQLite } from '@ionic-native/sqlite/ngx';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    AuthenticationService,
    SQLite,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}


// Run Android:
/*
ionic cordova build android
ionic cordova run android -l
 */
