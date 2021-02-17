import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReporteProductosService {


  apiProductos="https://localhost:44396/api/Productos";

  constructor( private http:HttpClient) { }

  listarProducto(sucursal:string)
  {
    return this.http.get(this.apiProductos + "/?sucursal=" +sucursal);

  }

  listarSucursales(){

    return this.http.get('https://localhost:44396/api/sucursales');

  }

  buscarProducto(busqueda:string,idSucursal:string){

    return this.http.get('https://localhost:44396/api/Productos/buscador/?buscador='+busqueda+'&sucursal='+idSucursal);

  }

}
