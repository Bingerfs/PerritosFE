import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  API_URL : string = "https://sheltered-journey-95786.herokuapp.com/";
  API_URL2 : string = "http://localhost:5000/";

  public get(path:string) {

    var endpoint = this.API_URL + path;
    return this.http.get(endpoint);

  }

  public signUser(path:string, body:any){
    var endpoint = this.API_URL + path;
    return this.http.get(endpoint, body);
  }


  // create method 
  public post(path:string,body:any) {

      var endpoint = this.API_URL + path;
      return this.http.post(endpoint,body);

  }
  // delete method    
  public delete(path:string){

    var endpoint = this.API_URL + path;
    return this.http.delete(endpoint);

  }  
  // update method    
  public update(path:string, body:any){
    var endpoint = this.API_URL + path;
    return this.http.put(endpoint,body);
  }

  public googleSearch(){
  
  }

}
