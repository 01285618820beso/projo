import { ProductDetailsComponent } from './product-details/product-details.component';
import { NewformComponent } from './Top100(product)/newform/newform.component';
import { QuestionComponent } from './question/question.component';
import { LoginComponent } from './login/login.component';
import { UsedcarsComponent } from './cars/usedcars/usedcars.component';
import { NewcarsComponent } from './cars/myorders/newcars.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Top100Component } from './Top100(product)/top100.component';
import { OrdersComponent } from './orders/orders.component';
import { AuthGurdService } from './services/auth-gurd.service';
import { NewComponent } from './Top100(product)/new/new.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


const routes: Routes = [
    {path:'admin/myorders' , component:NewcarsComponent ,canActivate:[AuthGurdService]},
    {path:'product-details/:id' , component:ProductDetailsComponent },
    {path:'shoppingCart' , component:ShoppingCartComponent },

    {path:'products' , component:NewComponent },
    {path:'' , component:NewComponent },
    {path:'admin/manageorders' , component:UsedcarsComponent ,canActivate:[AuthGurdService]},
    {path:'login' , component:LoginComponent},
    {path:'question' , component:QuestionComponent ,canActivate:[AuthGurdService]},
    {path:'product' , component:Top100Component ,canActivate:[AuthGurdService]},
    {path:'product/new' , component:NewformComponent ,canActivate:[AuthGurdService]},
    {path:'orders' , component:OrdersComponent ,canActivate:[AuthGurdService]},
    {path:'product/new/:id' , component:NewformComponent ,canActivate:[AuthGurdService]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
