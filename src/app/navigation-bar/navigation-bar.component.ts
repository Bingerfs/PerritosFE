import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AngularTokenService } from 'angular-token';
import { CommonModule} from "@angular/common";

@Component({
  selector: 'prac3fe-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private router: Router, public tokenAuthService:AngularTokenService) {
  }

  ngOnInit() {
  }
  navbarOpen=  false;
  toggleNavbar()
  {
    this.navbarOpen=!this.navbarOpen;
  }

  salir(){
    this.tokenAuthService.signOut().subscribe()
  }

}
