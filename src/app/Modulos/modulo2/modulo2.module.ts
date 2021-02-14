import { ReporteEmpleadosPageRoutingModule } from './../../Vistas/reporte-empleados/reporte-empleados-routing.module';
import { ReporteEmpleadosPageModule } from './../../Vistas/reporte-empleados/reporte-empleados.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from 'src/app/Vistas/menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuComponent
  ]
})
export class Modulo2Module { }
