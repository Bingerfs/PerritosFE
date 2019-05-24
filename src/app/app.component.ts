import { Component } from '@angular/core';
import { slideInAnimation } from './route-animation';


@Component({
  selector: 'prac3fe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'doggos';
}
