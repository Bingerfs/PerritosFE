import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PerritosComponent } from './perritos/perritos.component';
import { NewPerritoComponent } from './perritos/new-perrito/new-perrito.component';
import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';

import { GatitosComponent } from './gatitos/gatitos.component';
import { NewGatitoComponent } from './new-gatito/new-gatito.component';
import { SignupComponent } from './signup/signup.component';
import {AngularTokenModule, AngularTokenService} from 'angular-token';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UpdatePassComponent } from './update-pass/update-pass.component'

@NgModule({
  declarations: [
    AppComponent,
    PerritosComponent,
    NewPerritoComponent,
    HomeComponent,
    NavigationBarComponent,
    FooterComponent,
    GatitosComponent,
    NewGatitoComponent,

    SignupComponent,
    LoginComponent,
    PerfilComponent,
    UpdatePassComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AngularTokenModule.forRoot({
     apiBase: 'http://localhost:3000'
    }),
    RouterModule.forRoot([
      {
        path: 'perritos',
        component: PerritosComponent,
        data: {animation: 'Perritos'},
        canActivate: [AngularTokenService]
      },
      {
        path: 'perritos/add',
        component: NewPerritoComponent,
        data: {animation: 'addPerritos'},
        canActivate: [AngularTokenService]
      },
      {
        path: 'perritos/add/:id',
        component: NewPerritoComponent,
        data: {animation: 'addPerritos'},
        canActivate: [AngularTokenService]
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'gatitos',
        component: GatitosComponent,
        data: {animation: 'Gatitos'},
        canActivate: [AngularTokenService]
      },
      {
        path: 'gatitos/add',
        component: NewGatitoComponent,
        data: {animation: 'addGatitos'},
        canActivate: [AngularTokenService]
      },
      {
        path: 'gatitos/add/:id',
        component: NewGatitoComponent,
        data: {animation: 'addGatitos'},
        canActivate: [AngularTokenService]
      },
      {
        path: 'auth',
        component: SignupComponent
      },
      {
        path: 'auth/signin',
        component: LoginComponent
      },
      {
        path: 'perfil',
        component: PerfilComponent
      },
      {
        path: 'perfil/editPass',
        component: UpdatePassComponent,
      }
    ]),
  ],
  providers: [ApiService, AngularTokenModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
