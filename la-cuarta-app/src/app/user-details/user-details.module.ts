import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './user-details-routing.module';

import { UserDetailsPage } from './user-details.page';
import {UploadFormComponent} from '../upload-form/upload-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [
    UserDetailsPage,
    UploadFormComponent]
})
export class DashboardPageModule {}
