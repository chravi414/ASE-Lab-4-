import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KnowledgePageRoutingModule } from './knowledge-routing.module';

import { KnowledgePage } from './knowledge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KnowledgePageRoutingModule,
    HttpClientModule
  ],
  declarations: [KnowledgePage]
})
export class KnowledgePageModule {}
