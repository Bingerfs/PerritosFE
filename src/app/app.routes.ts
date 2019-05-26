import { RouterModule, Routes } from '@angular/router';
import { PerritosComponent } from './perritos/perritos.component';
import { NewPerritoComponent } from './perritos/new-perrito/new-perrito.component';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';


const APPROUTES: Routes = [
    { path: 'perritos',
      component: PerritosComponent },
    { path: 'perritos/add',
      component: NewPerritoComponent },
    { path: 'perritos/add/:id',
      component: NewPerritoComponent },
    { path: 'home',
      component: HomeComponent     },
    { path: 'navigation',
      component: NavigationBarComponent     },
      { path: 'footer',
      component: FooterComponent     },
];

// tslint:disable-next-line:eofline
export const APP_ROUTER = RouterModule.forRoot(APPROUTES);
