import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboardContainerPage } from './onboard-container.page';

const routes: Routes = [
  {
    path: '',
    component: OnboardContainerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardContainerPageRoutingModule {}
