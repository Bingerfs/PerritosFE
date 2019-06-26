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

  fileToUpload: File = null;

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
      this.router.navigateByUrl('/gatitos');
    })
    }
    else
    this.apiService.post("gatitos",this.gatito).subscribe((r)=>{
      this.router.navigateByUrl('/gatitos');
    this.gatito = new Gatitos();


    });
    this.apiService.storeVetInfo("upload/", this.fileToUpload).subscribe(
      (r)=>{
        console.log(r);
      },
      (err)=>{
        console.log(err);
      }

    );
}

public handleFileInput(files: FileList) {
  this.fileToUpload = files.item(0);

}



}
