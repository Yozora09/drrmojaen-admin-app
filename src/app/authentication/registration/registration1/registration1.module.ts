import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MaskitoModule } from '@maskito/angular';

import { Registration1PageRoutingModule } from './registration1-routing.module';

import { LandingBtnComponent } from 'src/app/components/buttons/landing-btn/landing-btn.component';
import { Form1Component } from 'src/app/components/form-headers/form1/form1.component';
import { Registration1Page } from './registration1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registration1PageRoutingModule,
    MaskitoModule
  ],
  declarations: [Registration1Page, LandingBtnComponent, Form1Component]
})
export class Registration1PageModule {}
