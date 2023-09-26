import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnboardContainerPageRoutingModule } from './onboard-container-routing.module';

import { OnboardContainerPage } from './onboard-container.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardContainerPageRoutingModule
  ],
  declarations: [OnboardContainerPage]
})
export class OnboardContainerPageModule {}
