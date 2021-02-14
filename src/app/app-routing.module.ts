import { Componente2Component } from './Vistas/componente2/componente2.component';
import { ReporteEmpleadosPage } from './Vistas/reporte-empleados/reporte-empleados.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { MenuPrincipalPage } from './Vistas/menu-principal/menu-principal.page';
import { ComponenteComponent } from './Vistas/componente/componente.component';


const routes: Routes = [



  {path:'reporteEmpleados', component:ReporteEmpleadosPage},
  {path:'componente', component:ComponenteComponent},
  {path:'componente2', component:Componente2Component},
  {path:'menuPrincipal', component:MenuPrincipalPage },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
