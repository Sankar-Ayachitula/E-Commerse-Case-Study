import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin-components/add-product/add-product.component';
import { AdminMainComponent } from './admin-components/admin-main/admin-main.component';
import { DeleteProductComponent } from './admin-components/delete-product/delete-product.component';
import { UpdateProductComponent } from './admin-components/update-product/update-product.component';
import { ViewProductsComponent } from './admin-components/view-products/view-products.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { UserCartComponent } from './components/user-cart/user-cart.component';
import { UserLoginService } from './services/user-login.service';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'main',component:MainComponent,canActivate:[UserLoginService]},
  {path:'user-cart',component:UserCartComponent,canActivate:[UserLoginService]},
  {path:'admin-main',component:AdminMainComponent},
  {path:'view-products',component:ViewProductsComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'delete-product',component:DeleteProductComponent},
  {path:'update-product',component:UpdateProductComponent},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
