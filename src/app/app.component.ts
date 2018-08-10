import { Component } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name: string = '';
  age: number;
  found:boolean;

  constructor (private httpClient: HttpClient){  }

  onNameKeyUp(event : any){
    this.name = event.target.value;
    this.found = false;
  }

  getProfile(){
    this.httpClient.get(`https://my-json-server.typicode.com/denukaNirmalee/json-faker-directory/profiles/?name=${this.name}`)
    .subscribe(
      (data: any[])=> {
        //console.log(data)
        if(data.length){
          this.age = data[0].age;
          this.found = true;
        }
      }
    )
  }

  postProfile(){
    this.httpClient.post(`https://my-json-server.typicode.com/denukaNirmalee/json-faker-directory/profiles/`,
    {
      name:'marko',
      age: 41
    } )
    .subscribe(
      (data: any)=> {
        console.log(data)
        
      }
    )
  }
}
