import { CategoriesService } from './services/categories.service';
import { UserService } from './services/user.service';
import { AuthGurdService } from './services/auth-gurd.service';
import { AuthService } from './services/auth.service';
import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewcarsComponent } from './cars/myorders/newcars.component';
import { UsedcarsComponent } from './cars/usedcars/usedcars.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { Top100Component } from './Top100(product)/top100.component';
import { QuestionComponent } from './question/question.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TodoComponent } from './todo/todo.component';
import { NewComponent } from './Top100(product)/new/new.component';
import { NewformComponent } from './Top100(product)/newform/newform.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ProductcardComponent } from './productcard/productcard.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewcarsComponent,
    UsedcarsComponent,
    LoginComponent,
    OrdersComponent,
    Top100Component,
    QuestionComponent,
    TodoComponent,
    NewComponent,
    NewformComponent,
    ProductcardComponent,
    ShoppingCartComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireAuthModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    DataTablesModule
    
  ],
  providers: [
    AuthService,
    AuthGurdService,
    UserService,
    CategoriesService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
