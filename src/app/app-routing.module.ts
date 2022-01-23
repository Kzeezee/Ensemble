import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './static/home/home.component';
import { PricingComponent } from './static/pricing/pricing.component';
import { OurstoryComponent } from './static/ourstory/ourstory.component';
import { LoginComponent } from './static/login/login.component';
import { RegisterComponent } from './static/register/register.component';
import { DashboardComponent } from './ensembleapp/dashboard/dashboard.component';
import { CreateEventComponent } from './ensembleapp/create-event/create-event.component';
import { EventDetailsComponent } from './ensembleapp/event-details/event-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'content/home', pathMatch: 'full' },
  { path: 'content/home', component: HomeComponent },
  { path: 'content/pricing', component: PricingComponent },
  { path: 'content/ourstory', component: OurstoryComponent },
  { path: 'content/login', component: LoginComponent },
  { path: 'content/register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create-event', component: CreateEventComponent },
  { path: 'event-details', component: EventDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = [
  HomeComponent,
  LoginComponent,
  RegisterComponent,
  OurstoryComponent,
  PricingComponent,
  DashboardComponent,
  CreateEventComponent,
  EventDetailsComponent
];
