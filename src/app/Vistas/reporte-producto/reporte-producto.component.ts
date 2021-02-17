import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit, NgModule } from '@angular/core';
import { LoadingController, IonicModule } from '@ionic/angular';
import { ReporteProductosService } from 'src/app/Servicios/reporte-productos.service';

@NgModule({
  imports: [CommonModule, IonicModule, FormsModule],
  declarations: [ReporteProductoComponent],
})
@Component({
  selector: 'app-reporte-producto',
  templateUrl: './reporte-producto.component.html',
  styleUrls: ['./reporte-producto.component.scss'],
})
export class ReporteProductoComponent implements OnInit {
  objProducto: any = [];
  objSucursales: any = [];
  cmbSucursal = '';
  total: number = 0;
  txtBusqueda = '';
  cargando = 1;
  lenghtIncial = 0;
  avaluo = 0;

  constructor(
    private productos: ReporteProductosService,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.listarProductos();
  }

  async listarProducto() {
    this.txtBusqueda = '';
    this.cargando = 1;
    await this.verLoader();
    this.productos.listarProducto(this.cmbSucursal).subscribe((res) => {
      this.objProducto = res;
      this.total = this.objProducto.length;
      this.lenghtIncial = this.objProducto.length;
      this.cargando = 0;
      this.calcularAvaluo();
      this.ocultarLoader();
    });
  }

  listarProductos() {
    this.productos.listarSucursales().subscribe((res) => {
      this.objSucursales = res;
    });
  }

  async buscar() {
    this.objProducto = [];
    if (this.txtBusqueda == '') {
      this.listarProducto();
      return;
    }
    await this.verLoader();
    this.cargando = 1;
    this.productos
      .buscarProducto(this.txtBusqueda, this.cmbSucursal)
      .subscribe((res) => {
        this.objProducto = res;
        this.total = this.objProducto.length;
        this.cargando = 0;
        if (this.total > 0) {
          this.calcularAvaluo();
        }
        this.ocultarLoader();
      });
  }

  limpiar() {
    if (this.txtBusqueda == '') {
      if (this.lenghtIncial != this.objProducto.length) {
        this.listarProducto();
      }
    }
  }

  async verLoader() {
    const loading = await this.loadingController.create({
      cssClass: 'loader',
      message: 'Espere...',
    });
    await loading.present();
  }

  async ocultarLoader() {
    await this.loadingController.dismiss();
  }

  calcularAvaluo() {
    this.avaluo = 0;
    this.objProducto.forEach((item) => {
      this.avaluo = this.avaluo + item.stock * item.precioUnidad;
    });
  }

  errorImagen(event: any) {
    let obj = event.srcElement;
    let url = '../../../assets/icon/producto.png';
    obj.src = url;
  }
}
