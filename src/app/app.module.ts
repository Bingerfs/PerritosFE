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
import { SignupComponent } from './signup/signup.component';
import {AngularTokenModule} from 'angular-token'

@NgModule({
  declarations: [
    AppComponent,
    PerritosComponent,
    NewPerritoComponent,
    HomeComponent,
    NavigationBarComponent,
    FooterComponent,
    SignupComponent,
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
        data: {animation: 'Perritos'}
      },
      {
        path: 'perritos/add',
        component: NewPerritoComponent,
        data: {animation: 'addPerritos'}
      },
      {
        path: 'perritos/add/:id',
        component: NewPerritoComponent,
        data: {animation: 'addPerritos'}
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'signup',
        component: SignupComponent
      }

    ]),
  ],
  providers: [ApiService, AngularTokenModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
