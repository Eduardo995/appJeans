import { Componente } from './../Interfaces/componente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariosService {

  constructor(private http:HttpClient) { }

  getMenuOpts(){
    return this.http.get<Componente[]>("../../assets/data/menu.json");
  }
}
