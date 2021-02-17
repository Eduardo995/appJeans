import { ReporteClientesComponent } from './Vistas/reporte-clientes/reporte-clientes.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuInicioComponent } from './Vistas/menu-inicio/menu-inicio.component';
import { ReporteEmpleadosComponent } from './Vistas/reporte-empleados/reporte-empleados.component';
import { ReporteProductoComponent } from './Vistas/reporte-producto/reporte-producto.component';
import { ReporteFacturaVentaComponent } from './Vistas/reporte-factura-venta/reporte-factura-venta.component';
import { ReporteFacturaCompraComponent } from './Vistas/reporte-factura-compra/reporte-factura-compra.component';



const routes: Routes = [



  {path:'menuInicio', component:MenuInicioComponent},
  {path:'reporteClientes', component:ReporteClientesComponent},
  {path:'reporteEmpleados', component:ReporteEmpleadosComponent },
  {path:'reporteProductos', component:ReporteProductoComponent},
  {path:'facturaVentas', component:ReporteFacturaVentaComponent},
  {path:'facturaCompras', component:ReporteFacturaCompraComponent},







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
