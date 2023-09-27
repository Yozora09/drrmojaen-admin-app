import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registration3PageRoutingModule } from './registration3-routing.module';

import { ReturnBtnComponent } from 'src/app/components/buttons/return-btn/return-btn.component';
import { Form3Component } from 'src/app/components/form-headers/form3/form3.component';
import { Registration3Page } from './registration3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registration3PageRoutingModule
  ],
  declarations: [Registration3Page, ReturnBtnComponent, Form3Component]
})
export class Registration3PageModule {}
