import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registration2PageRoutingModule } from './registration2-routing.module';

import { Registration2Page } from './registration2.page';
import { Form2Component } from 'src/app/components/form-headers/form2/form2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registration2PageRoutingModule
  ],
  declarations: [Registration2Page, Form2Component]
})
export class Registration2PageModule {}
