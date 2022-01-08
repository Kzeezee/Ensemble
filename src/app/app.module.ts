import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav'
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UnityComponent } from './unity/unity.component';
import { CarService } from './ensembleapp/shared/services/car.service';
import { NavbarComponent } from './static/shared/navbar/navbar.component';
import { FooterComponent } from './static/shared/footer/footer.component';
import { NavDrawerComponent } from './ensembleapp/shared/nav-drawer/nav-drawer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field'
import { from } from 'rxjs';
import { HeaderComponent } from './ensembleapp/shared/header/header.component';
import { BodyComponent } from './ensembleapp/shared/body/body.component';
import { NextDirective } from './ensembleapp/shared/header/next.directive';
import { PrevDirective } from './ensembleapp/shared/header/prev.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './ensembleapp/shared/security/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from './ensembleapp/shared/security/auth.interceptor';
import { TitleCasePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    UnityComponent,
    NavbarComponent,
    FooterComponent,
    NavDrawerComponent,
    RoutingComponents,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [CarService, 
    AuthService,
    TitleCasePipe,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
