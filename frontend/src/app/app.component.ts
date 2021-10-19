import { Component } from '@angular/core';
import { ServicesService } from './services/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private services:ServicesService){}
  private url = this.services.geturl()
  data(){console.log(
    this.services.getdata(`${this.url}/all`)
  )}
}
