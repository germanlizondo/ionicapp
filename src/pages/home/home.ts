import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  http;
  paises:any[] = [];
  constructor(public navCtrl: NavController,_http: HttpClient) {
    this.http = _http;

  }

  abrirpuerta(){
   this.http.get('https://restcountries.eu/rest/v2/lang/es')
   .subscribe(data => {
 console.log(data);
  this.paises = data
console.log(this.paises);
  }, err => {
    this.paises = [{
      "name": "error"
    }]
    console.log(err);
  });
  }

}
