import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AngularTokenService } from 'angular-token'

@Component({
  selector: 'prac3fe-update-pass',
  templateUrl: './update-pass.component.html',
  styleUrls: ['./update-pass.component.css']
})
export class UpdatePassComponent implements OnInit {

  updatePass = {
    current: '',
    new: '',
    newConf: ''
  };

  constructor(public authTokenService:AngularTokenService, public router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authTokenService.updatePassword({
      password:             this.updatePass.new,
      passwordConfirmation: this.updatePass.newConf,
      passwordCurrent:      this.updatePass.current,
    }).subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
    console.log(this.updatePass);
    this.router.navigate(['home']);
  }

}
