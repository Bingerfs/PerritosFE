
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

declare var FB: any;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiservice: ApiService, private router: Router) {
    (window as any).fbAsyncInit = function () {
      FB.init({
        appId      : '2331024586965294',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.3'
      });
      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  private success(credentials: any) {
    localStorage.setItem("credentials", JSON.stringify(credentials));
    this.router.navigateByUrl("/home");
  }

 
  loginWithFacebook() {
    console.log("submit login to facebook");
    // FB.login();
    FB.login((response) => {
      console.log('submitLogin', response);
      if (response.authResponse) {
        console.log(response.authResponse);
        this.success(response.authResponse);
      }
      else {
        console.log('User login failed');
      }
    });
  }
}