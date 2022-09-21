import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './myComponents/todos/todos.component';
import { TodoItemComponent } from './myComponents/todo-item/todo-item.component';
import { AddTodoComponent } from './myComponents/add-todo/add-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './myComponents/about/about.component';
import { LoginComponent } from './myComponents/login/login.component';

import { SignupComponent } from './myComponents/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './myComponents/logout/logout.component';
import { LandingPageComponent } from './myComponents/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    LandingPageComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
