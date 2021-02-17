import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReporteClientesService {

  apiClientes="https://localhost:44396/api/clientes";

  constructor( private http:HttpClient) { }

  listarCliente(sucural:string)
  {
    return this.http.get(this.apiClientes + "/?sucursal=" +sucural);

  }

  listarSucursales(){
    return this.http.get('https://localhost:44396/api/sucursales');
  }


  buscarCliente(busqueda:string,idSucursal:string){
    return this.http.get('https://localhost:44396/api/clientes/buscador/?buscador='+busqueda+'&sucursal='+idSucursal);
  }

}
