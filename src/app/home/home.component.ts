import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'prac3fe-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public rows;

  constructor(public apiService: ApiService , public router : Router) { }

  ngOnInit() {
  }
  onClikMe(){
  }
  public buscar(){
    let cadena = document.getElementById("search") as HTMLInputElement;
    console.log("buscando : " + cadena.value);
    var path = 'google_custom_search/index?parametro=' + cadena;
    this.apiService.get(path).subscribe((data )=>{
      console.log(data);
      this.rows = data;
      });
      // this.apiService.get("perritos/"+data.id).subscribe((data : Perritos)=>{
      //   this.perrito = data;
      //   });

  }
}
