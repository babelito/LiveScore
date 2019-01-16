import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { routing }        from './app-routing.module';

import { LoginService } from './Services/login-service';
import { UserService } from './Services/user-service';
import { AuthenticationService } from './Services/authentication-service';

import { ContainerComponent } from './Components/ContainerComponent/container-component';
import { HomeComponent } from './Components/HomeComponent/home-component';
import { LoginComponent } from './Components/LoginComponent/login-component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    ContainerComponent,
    HomeComponent,
    LoginComponent,
  ],
  providers: [
    AuthenticationService,
    LoginService,
    UserService
  ],
  bootstrap: [ContainerComponent]
})

export class AppModule { }