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
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from './ensembleapp/shared/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './ensembleapp/shared/security/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from './ensembleapp/shared/security/auth.interceptor';
import { TitleCasePipe } from '@angular/common';
import { CreateEventComponent } from './ensembleapp/create-event/create-event.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { EventService } from './ensembleapp/shared/services/event.service';
import { EventDetailsComponent } from './ensembleapp/event-details/event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UnityComponent,
    NavbarComponent,
    FooterComponent,
    NavDrawerComponent,
    RoutingComponents,
    HeaderComponent,
    CreateEventComponent,
    EventDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [CarService, 
    AuthService,
    EventService,
    TitleCasePipe,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
