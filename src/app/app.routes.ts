import { RouterModule, Routes } from '@angular/router';
import { PerritosComponent } from './perritos/perritos.component';
import { NewPerritoComponent } from './perritos/new-perrito/new-perrito.component';
import { NewGatitoComponent } from './new-gatito/new-gatito.component';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { GatitosComponent } from './gatitos/gatitos.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {AngularTokenModule, AngularTokenService} from 'angular-token';


const APPROUTES: Routes = [
    { path: 'perritos',
      component: PerritosComponent,
      canActivate: [AngularTokenService] },
    { path: 'perritos/add',
      component: NewPerritoComponent,
      canActivate: [AngularTokenService] },
    { path: 'perritos/add/:id',
      component: NewPerritoComponent,
      canActivate: [AngularTokenService] },
    { path: 'gatitos',
      component: GatitosComponent,
      canActivate: [AngularTokenService] },
    { path: 'gatitos/add',
      component: NewGatitoComponent,
      canActivate: [AngularTokenService] },
    { path: 'gatitos/add/:id',
      component: NewGatitoComponent,
      canActivate: [AngularTokenService] },
      { path: 'home',
      component: HomeComponent     },
    { path: 'navigation',
      component: NavigationBarComponent     },
      { path: 'footer',
      component: FooterComponent     },
    { path: 'auth',
      component: SignupComponent},
    {
      path: 'auth/signin',
      component: LoginComponent,
    }
];

// tslint:disable-next-line:eofline
export const APP_ROUTER = RouterModule.forRoot(APPROUTES);
