import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AngularTokenService } from 'angular-token'

@Component({
  selector: 'prac3fe-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public rows;


  constructor(private router: Router, public tokenAuthService:AngularTokenService,public apiService: ApiService) {}
    
  

  ngOnInit() {
  }
  onClikMe(){
  }
  public buscar(){
    let cadena = document.getElementById("search") as HTMLInputElement;
    console.log("buscando : " + cadena.value);
    var path = 'google_custom_search/index?parametro=' + cadena.value;
    this.apiService.get(path).subscribe((data )=>{
      console.log(data);
      this.rows = data.items;
      });
     

  }
}
