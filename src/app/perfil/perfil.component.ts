import { Component, OnInit } from '@angular/core';
import {AngularTokenService} from 'angular-token'
import {Router} from '@angular/router'

@Component({
  selector: 'prac3fe-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(public authTokenService:AngularTokenService, public router:Router) { }

  ngOnInit() {
    this.authTokenService.validateToken().subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
  }

  eliminar(){
    this.authTokenService.deleteAccount().subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
    this.router.navigate(['home']);
  }


}
