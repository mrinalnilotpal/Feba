import { HtmlParser } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { VendorAddProductComponent } from './vendor-add-product/vendor-add-product.component';
import { VendorAuthComponent } from './vendor-auth/vendor-auth.component';
import { VendorHomeComponent } from './vendor-home/vendor-home.component';

const routes: Routes = [
  {
    path :'',
    component : HomeComponent,
  },
  {
    path :'vendor-auth',
    component : VendorAuthComponent,
  },
  {
    path :'vendor-home',
    component : VendorHomeComponent,
    canActivate : [AuthGuard]
  },
  {
    path:'vendor-add-product',
    component:VendorAddProductComponent,
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
