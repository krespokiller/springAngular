import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Allusers } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private _data!:Allusers[]
  private _url:string = environment.url
  constructor(private http:HttpClient) { }
  public geturl(){
    return this._url
  }
  public getdata(url:string){
    this.http.get<Allusers[]>(url).subscribe((resp)=>this._data = resp)
    return this._data
  }

}
