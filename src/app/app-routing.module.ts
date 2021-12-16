import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './static/home/home.component';
import { PricingComponent } from './static/pricing/pricing.component';
import { OurstoryComponent } from './static/ourstory/ourstory.component';
import { LoginComponent } from './static/login/login.component';
import { RegisterComponent } from './static/register/register.component';

const routes: Routes = [
  {path:'', redirectTo:'content/home', pathMatch:'full'},
  {path:'content/home', component: HomeComponent},
  {path:'content/pricing', component: PricingComponent},
  {path:'content/ourstory', component: OurstoryComponent},
  {path:'content/login', component: LoginComponent},
  {path:'content/register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [HomeComponent, LoginComponent, RegisterComponent, OurstoryComponent, PricingComponent]

