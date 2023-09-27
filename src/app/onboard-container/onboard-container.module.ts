import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { OnboardContainerPageRoutingModule } from './onboard-container-routing.module';

import { OnboardContainerPage } from './onboard-container.page';
import { Onboard1Component } from '../components/onboard-contents/onboard1/onboard1.component';
import { Onboard2Component } from '../components/onboard-contents/onboard2/onboard2.component';
import { Onboard3Component } from '../components/onboard-contents/onboard3/onboard3.component';
import { StartBtnComponent } from '../components/buttons/start-btn/start-btn.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardContainerPageRoutingModule
  ],
  declarations: [OnboardContainerPage, Onboard1Component, Onboard2Component, Onboard3Component, StartBtnComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OnboardContainerPageModule {}
