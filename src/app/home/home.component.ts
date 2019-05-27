import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AngularTokenService } from 'angular-token'

@Component({
  selector: 'prac3fe-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public tokenAuthService:AngularTokenService) {
    
   }

  ngOnInit() {
  }
  onClikMe(){
  }
}
