import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  public data;
  item: any;
  name: any;
  pro:any;
  valid:any;
  characters:boolean=false;
  houses:boolean=false;
  books:boolean=false;
  isvalid:Boolean=true;
  apidata;
  public show:boolean; true;
  public buttonName:any = 'Show';
  constructor(private http: ApiService) {

  }
  
  getresponse(typevariable) {
    if(typevariable=="books" ){
      this.houses = false;                                              
      this.books= true  ;
      this.characters = false ;
    }else if(typevariable=="houses"){
      this.houses = true;
      this.books= false ;
      this.characters = false ;
    }
    else{
      this.houses = false;
      this.books= false ;
      this.characters = true  ;
    }
    console.log("inside response",typevariable)
    this.http.getData(typevariable).subscribe((resp) => {
      console.warn(resp)
      this.apidata = resp;

    })

  }

  getcolor(Country) {
    switch (Country) {
      case 'india':
        return 'red';
      case 'usa':
        return 'green';
        case 'uk':
        return 'blue';
    }
  }


  changevalue(valid){
    this.isvalid=valid; 
    console.log(valid)
    console.log("angular")

  }
  
 


 




}

















