import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'', component:LoginPageComponent,},
  {path:'login_page', component:LoginPageComponent,},

  {path:'homepage', component:HomepageComponent,
    children:[
      {path:'', component:DashboardComponent,},
      {path:'dashboard', component:DashboardComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
