import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReporteCompraService {

  apiCompra="https://localhost:44396/api/facturaCompras/facturas";

  constructor(private http:HttpClient) { }


  listarVenta(sucursal:string, fechaDesde:string, fechaHasta:string)
  {

    const params = new  HttpParams()
    .set('sucursal',sucursal)
    .set('fechaDesde',fechaDesde)
    .set('fechaHasta',fechaHasta)

    return this.http.get(this.apiCompra,{params});
  }
}
