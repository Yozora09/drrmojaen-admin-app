import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomSplashPageRoutingModule } from './custom-splash-routing.module';

import { CustomSplashPage } from './custom-splash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomSplashPageRoutingModule
  ],
  declarations: [CustomSplashPage]
})
export class CustomSplashPageModule {}
