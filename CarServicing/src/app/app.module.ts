import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { VendorRegistrationComponent } from './vendor-registration/vendor-registration.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CustomerserviceCenterComponent } from './customerservice-center/customerservice-center.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    CustomerLoginComponent,
    VendorLoginComponent,
    VendorRegistrationComponent,
    CustomerRegistrationComponent,
    CustomerserviceCenterComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
