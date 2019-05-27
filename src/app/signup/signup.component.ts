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

  signUpUser = {
    login: '',
    password: '',
    passwordConfirmation: ''
  };
  

  constructor(public apiService: ApiService , public acRoute : ActivatedRoute, private router: Router, public tokenAuthService:AngularTokenService) { }
  
  ngOnInit() {
    
    
  }

  onSubmitSign(){
    this.tokenAuthService.registerAccount(this.signUpUser).subscribe(

      (res) => {

        if (res.status == 200){
          console.log(res.json());
          alert("Registrado");
          this.router.navigateByUrl('/signin');
        }

      },

      (err) => {
        console.log(err);
        alert("Error");
        this.router.navigateByUrl('/signup');
      }
  )
  }

}
