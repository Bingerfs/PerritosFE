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

@NgModule({
  declarations: [
    AppComponent,
    PerritosComponent,
    NewPerritoComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
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
      }          
    ]),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
