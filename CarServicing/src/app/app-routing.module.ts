import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CustomerserviceCenterComponent } from './customerservice-center/customerservice-center.component';
import { HomeComponent } from './home/home.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { VendorRegistrationComponent } from './vendor-registration/vendor-registration.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'vendorlogin',component:VendorLoginComponent},
  {path:'customerLogin',component:CustomerLoginComponent},
  {path:'customerregistration',component:CustomerRegistrationComponent},
  {path:'vendorregistration',component:VendorRegistrationComponent},
  {path:'customerservice-center',component:CustomerserviceCenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
