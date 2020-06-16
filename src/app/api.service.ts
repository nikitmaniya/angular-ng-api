import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  basicUrl = "https://anapioficeandfire.com/api/";
  constructor(private http: HttpClient) {

  }
  getData(typeVariable) {
    // console.log()
    var newUrl = this.basicUrl + typeVariable ;
    console.log(newUrl)
    return this.http.get(newUrl)
    
  }



}
