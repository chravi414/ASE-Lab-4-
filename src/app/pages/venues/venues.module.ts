import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { VenuesPageRoutingModule } from './venues-routing.module';

import { VenuesPage } from './venues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    VenuesPageRoutingModule
  ],
  declarations: [VenuesPage]
})
export class VenuesPageModule {}
