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
  {
    path: 'login',
    loadChildren: () => import('./authentication/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration1',
    loadChildren: () => import('./authentication/registration/registration1/registration1.module').then( m => m.Registration1PageModule)
  },
  {
    path: 'registration2',
    loadChildren: () => import('./authentication/registration/registration2/registration2.module').then( m => m.Registration2PageModule)
  },
  {
    path: 'registration3',
    loadChildren: () => import('./authentication/registration/registration3/registration3.module').then( m => m.Registration3PageModule)
  },
  {
    path: 'landing-page',
    loadChildren: () => import('./landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
