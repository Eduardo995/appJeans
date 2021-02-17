import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReporteEmpleadosService {



  apiClientes="https://localhost:44396/api/empleados";

  constructor( private http:HttpClient) { }

  listarEmpleado(sucursal:string)
  {
    return this.http.get(this.apiClientes + "/?sucursal=" +sucursal);

  }

  listarSucursales(){
    return this.http.get('https://localhost:44396/api/sucursales');
  }


  buscarEmpleado(busqueda:string,idSucursal:string){
    return this.http.get('https://localhost:44396/api/Empleados/buscador/?buscador='+busqueda+'&sucursal='+idSucursal);
  }


}
