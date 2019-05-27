import { Component, OnInit } from '@angular/core';

import { Gatitos } from '../../app/gatitos';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'prac3fe-new-gatito',
  templateUrl: './new-gatito.component.html',
  styleUrls: ['./new-gatito.component.css']
})
export class NewGatitoComponent implements OnInit {


  public gatito : Gatitos  = new Gatitos();

  constructor(public apiService: ApiService , public acRoute : ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.acRoute.params.subscribe((data : any)=>{
      console.log(data.id);
      if(data && data.id){
          this.apiService.get("gatitos/"+data.id).subscribe((data : Gatitos)=>{
          this.gatito = data;
          });
      }
      else
      {
          this.gatito = new Gatitos();
      }
      })
  }

  public onSubmit(){
    console.log("Adding a gatito: " + this.gatito.nombre);
    if(this.gatito.id){
    this.apiService.update("gatitos/"+this.gatito.id,this.gatito).subscribe((r)=>{
        console.log(r);
        alert("gatito updated !");
    })
    }
    else
    this.apiService.post("gatitos",this.gatito).subscribe((r)=>{
    console.log(r);
    this.gatito = new Gatitos();


    });
    this.router.navigateByUrl('/gatitos');

}

}
