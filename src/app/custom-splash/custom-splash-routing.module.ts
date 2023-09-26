import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomSplashPage } from './custom-splash.page';

const routes: Routes = [
  {
    path: '',
    component: CustomSplashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomSplashPageRoutingModule {}
