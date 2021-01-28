import { PlainPageComponent } from './plain-page/plain-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'login-page',component:LoginPageComponent
  },
  {
    path:'registerPage',component:RegisterPageComponent
  },
  {
    path:'homepage',component:HomepageComponent
  },
  {
path:'plain-page',component:PlainPageComponent
  },
  {
    path : '**',
    redirectTo : 'homepage',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
