import { Component, OnInit } from '@angular/core';

import { Perritos } from '../../perritos';
import { ApiService } from '../../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'prac3fe-new-perrito',
  templateUrl: './new-perrito.component.html',
  styleUrls: ['./new-perrito.component.css']
})
export class NewPerritoComponent implements OnInit {


  public perrito : Perritos  = new Perritos();

  constructor(public apiService: ApiService , public acRoute : ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.acRoute.params.subscribe((data : any)=>{
      console.log(data.id);
      if(data && data.id){
          this.apiService.get("perritos/"+data.id).subscribe((data : Perritos)=>{
          this.perrito = data;
          });
      }
      else
      {
          this.perrito = new Perritos();
      }
      })
  }

  public onSubmit(){
    console.log("Adding a perrito: " + this.perrito.nombre);
    if(this.perrito.id){
    this.apiService.update("perritos/"+this.perrito.id,this.perrito).subscribe((r)=>{
        console.log(r);
        alert("Perrito updated !");
    })
    }
    else
    this.apiService.post("perritos",this.perrito).subscribe((r)=>{
    console.log(r);
    this.perrito = new Perritos();


    });
    this.router.navigateByUrl('/perritos');

}

}
