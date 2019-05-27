import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Gatitos } from '../../app/gatitos';
import { Router } from '@angular/router';

@Component({
  selector: 'prac3fe-gatitos',
  templateUrl: './gatitos.component.html',
  styleUrls: ['./gatitos.component.css']
})
export class GatitosComponent implements OnInit {

  public columns = ['id','name'];
  public rows : Array<Gatitos>; 

  constructor(public apiService: ApiService , public router : Router) { }
  ngOnInit() {
    this.apiService.get("gatitos").subscribe((data : Gatitos[])=>{
      console.log(data);
      this.rows = data;
      });
  }

  public delete(id:string){

    console.log("delete : " + id);
    var path = 'gatitos/' + id;
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
    this.router.navigate(['/gatitos/add/',id]);

  }
}
