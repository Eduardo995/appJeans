import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteEmpleadosPage } from './reporte-empleados.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteEmpleadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteEmpleadosPageRoutingModule {}
