import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiEmpleados:string='https://localhost:44396/api/empleados';

  constructor(private http:HttpClient) { }

  login(usuario:any,contra:any):Observable<any>
{

const accion="/loginApp";
const params =  new HttpParams()
.set('usuario',usuario)
.set('contra',contra)

return this.http.get<any>(this.apiEmpleados+accion,{params});

}
}
