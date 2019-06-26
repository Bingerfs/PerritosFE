import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { AngularTokenService } from 'angular-token'

@Component({
  selector: 'prac3fe-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public invalid: Boolean;
  public errors: Array<string> = [];

  signUpUser = {
    login: '',
    password: '',
    passwordConfirmation: '',
    name: '',
    nickname: ''
  };
  

  constructor(public apiService: ApiService , public acRoute : ActivatedRoute, private router: Router, public tokenAuthService:AngularTokenService) { }
  
  ngOnInit() {
    if(this.tokenAuthService.userSignedIn()==true)
      this.router.navigateByUrl('/home');
  }

  onSubmitSign(){
    this.tokenAuthService.registerAccount(this.signUpUser).subscribe(

      (res) => {

        if (res.status != 500){
          this.router.navigateByUrl('/home');
          console.log(res);
          
          alert("Registrado");
        }

      },

      (err) => {
        this.errors=err.error.errors.full_messages;
        console.log(err);
      }
  )
  }

}
