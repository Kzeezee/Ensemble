import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CarService } from './ensembleapp/shared/services/car.service';
import { NavbarComponent } from './static/shared/navbar/navbar.component';
import { HomeComponent } from './static/home/home.component';
import { FooterComponent } from './static/shared/footer/footer.component';
import { DashboardComponent } from './ensembleapp/dashboard/dashboard.component';
import { NavDrawerComponent } from './ensembleapp/shared/nav-drawer/nav-drawer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { HeaderComponent } from './ensembleapp/shared/header/header.component';
import { BodyComponent } from './ensembleapp/shared/body/body.component';
import { NextDirective } from './ensembleapp/shared/header/next.directive';
import { PrevDirective } from './ensembleapp/shared/header/prev.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DashboardComponent,
    NavDrawerComponent,
    HeaderComponent,
    BodyComponent,
    NextDirective,
    PrevDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatChipsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
