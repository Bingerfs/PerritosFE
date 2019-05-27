import { Component } from '@angular/core';
import { slideInAnimation } from './route-animation';

import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AngularTokenService } from 'angular-token'
import { environment } from "../environments/environment"

@Component({
  selector: 'prac3fe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'doggos';
  
  
}
