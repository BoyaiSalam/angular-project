import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './myComponents/about/about.component';
import { LandingPageComponent } from './myComponents/landing-page/landing-page.component';
import { LoginComponent } from './myComponents/login/login.component';
import { SignupComponent } from './myComponents/signup/signup.component';
import { TodosComponent } from './myComponents/todos/todos.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path:'home', component:LandingPageComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'todos', component: TodosComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'about', component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
