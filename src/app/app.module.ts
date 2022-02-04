import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorComponent } from './components/error/error.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { UserCartComponent } from './components/user-cart/user-cart.component';
import { AdminMainComponent } from './admin-components/admin-main/admin-main.component';
import { ViewProductsComponent } from './admin-components/view-products/view-products.component';
import { AddProductComponent } from './admin-components/add-product/add-product.component';
import { DeleteProductComponent } from './admin-components/delete-product/delete-product.component';
import { UpdateProductComponent } from './admin-components/update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    MainComponent,
    AdminLoginComponent,
    UserCartComponent,
    AdminMainComponent,
    ViewProductsComponent,
    AddProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
