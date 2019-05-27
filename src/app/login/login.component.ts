import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'prac3fe-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInUser = {
    login: '',
    password: ''
  };



  constructor(public apiService: ApiService , public acRoute : ActivatedRoute, private router: Router, public tokenAuthService:AngularTokenService) { }

  ngOnInit() {
  }

  onSubmitSignIn(){
    this.tokenAuthService.signIn(this.signInUser).subscribe(

      (res) => {

        if (res.status == 200){
          console.log(res);
          alert("Registrado");
          this.router.navigateByUrl('/home');
        }

      },

      (err) => {
        console.log(err);
        alert("Error");
        this.router.navigateByUrl('/signin');
      }
  )
  }

}
