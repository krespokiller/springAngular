import { Component } from '@angular/core';
import { Allusers } from './interfaces/interface';
import { ServicesService } from './services/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private services:ServicesService){}
  private url = this.services.geturl()
  datos!:Allusers[]
  nombres!:string[]
  apellidos!:string[]
  data(){
    this.datos =this.services.getdata(`${this.url}/all`)
    this.nombres=this.datos.map(x=>x.regnombres)
    this.apellidos=this.datos.map(x=>x.regapellidos)
  }
}
