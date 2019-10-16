import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginModule)},
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then( m => m.SignupModule)},
  { path: 'otp', loadChildren: () => import('./otp/otp.module').then( m => m.OTPModule)},
  { path: 'qr', loadChildren: () => import('./qrscan/qrscan.module').then( m => m.QRScanModule)},
  { path: 'verification', loadChildren: () => import('./verfication/verification.module').then( m => m.VerificationModule)},
  { path: 'order', loadChildren: () => import('./order/order.module').then( m => m.OrderModule)},
  { path: 'summary', loadChildren: () => import('./order-summary/order-summary.module').then( m => m.OrderSummaryModule)},
  { path: 'account', loadChildren: () => import('./account/account.module').then( m => m.AccountModule)},
  { path: 'history', loadChildren: () => import('./order-history/order-history.module').then( m => m.OrderHistoryModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
