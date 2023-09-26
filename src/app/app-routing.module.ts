import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'custom-splash',
    pathMatch: 'full'
  },
  {
    path: 'custom-splash',
    loadChildren: () => import('./custom-splash/custom-splash.module').then( m => m.CustomSplashPageModule)
  },
  {
    path: 'onboard-container',
    loadChildren: () => import('./onboard-container/onboard-container.module').then( m => m.OnboardContainerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
