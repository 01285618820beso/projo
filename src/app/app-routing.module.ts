import { QuestionComponent } from './question/question.component';
import { LoginComponent } from './login/login.component';
import { UsedcarsComponent } from './cars/usedcars/usedcars.component';
import { NewcarsComponent } from './cars/newcars/newcars.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Top100Component } from './top100/top100.component';
import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [
    {path:'cars/newcars' , component:NewcarsComponent},
    {path:'cars/usedcars' , component:UsedcarsComponent},
    {path:'login' , component:LoginComponent},
    {path:'question' , component:QuestionComponent},
    {path:'top100' , component:Top100Component},
    {path:'orders' , component:OrdersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
