import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  API_URL : string = "https://sheltered-journey-95786.herokuapp.com/";

  API_MAILSENDER : string = "http://localhost:7002/";
  API_GOOGLE : string = "http://localhost:5000/";


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


  public googleSearch(path:string){
  
    var endpoint = this.API_GOOGLE + path;
    return this.http.get(endpoint);
  }

  }
  public sendmail(path:string, body:any){
    var endpoint = this.API_URL3 + path;
    return this.http.post(endpoint,body);
  }
}
