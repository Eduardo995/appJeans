import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteEmpleadosPageRoutingModule } from './reporte-empleados-routing.module';

import { ReporteEmpleadosPage } from './reporte-empleados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteEmpleadosPageRoutingModule
  ],
  declarations: [ReporteEmpleadosPage]
})
export class ReporteEmpleadosPageModule {}
