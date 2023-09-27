import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPagePageRoutingModule } from './landing-page-routing.module';

import { LandingPagePage } from './landing-page.page';
import { RegBtnComponent } from '../components/buttons/reg-btn/reg-btn.component';
import { LoginBtnComponent } from '../components/buttons/login-btn/login-btn.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPagePageRoutingModule
  ],
  declarations: [LandingPagePage, RegBtnComponent, LoginBtnComponent]
})
export class LandingPagePageModule {}
