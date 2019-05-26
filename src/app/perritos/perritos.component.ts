import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Perritos } from '../../app/perritos';
import { Router } from '@angular/router';



@Component({
  selector: 'prac3fe-perritos',
  templateUrl: './perritos.component.html',
  styleUrls: ['./perritos.component.css']
})

export class PerritosComponent implements OnInit {

  public columns = ['id','name'];
  public rows : Array<Perritos>; 

  constructor(public apiService: ApiService , public router : Router) { }
  ngOnInit() {
    this.apiService.get("perritos").subscribe((data : Perritos[])=>{
      console.log(data);
      this.rows = data;
      });
  }

  public delete(id:string){

    console.log("delete : " + id);
    var path = 'perritos/' + id;
    this.apiService.delete(path).subscribe((r)=>{

    this.rows = this.rows.filter((p,i)=>{

        if(Number(id) === p.id ) 
        {
        return false;
        }
        return true;
    },this.rows)

    });

  }
  public update(id:string){
    console.log("update : " + id );
    this.router.navigate(['/perritos/add/',id]);

  }

}
