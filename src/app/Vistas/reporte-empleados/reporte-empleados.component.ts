import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoadingController, IonicModule } from '@ionic/angular';
import { ReporteEmpleadosService } from './../../Servicios/reporte-empleados.service';
import { Component, OnInit, NgModule } from '@angular/core';



@NgModule({
  imports: [CommonModule, IonicModule, FormsModule],
  declarations: [ReporteEmpleadosComponent]
})

@Component({
  selector: 'app-reporte-empleados',
  templateUrl: './reporte-empleados.component.html',
  styleUrls: ['./reporte-empleados.component.scss'],
})
export class ReporteEmpleadosComponent implements OnInit {

  objEmpleado: any = [];
  objSucursales: any = [];
  cmbSucursal = "";
  total: number = 0;
  txtBusqueda = "";
  cargando = 1;
  lenghtIncial = 0;

  constructor(private empleados: ReporteEmpleadosService, public loadingController: LoadingController) { }

  ngOnInit() {
    this.listarEmpleados();

  }

  async listarEmpleado() {
    this.txtBusqueda = "";
    this.cargando = 1;
    await this.verLoader();
    this.empleados.listarEmpleado(this.cmbSucursal).subscribe(res => {

      this.objEmpleado = res;
      this.total = this.objEmpleado.length;
      this.lenghtIncial = this.objEmpleado.length;
      this.cargando = 0;
      this.ocultarLoader();
    })

  }

  listarEmpleados() {
    this.empleados.listarSucursales().subscribe(res => {
      this.objSucursales = res;
    });
  }

  async buscar() {
    this.objEmpleado = [];
    if (this.txtBusqueda == "") {
      this.listarEmpleado();
      return;
    }
    await this.verLoader();
    this.cargando = 1;
    this.empleados.buscarEmpleado(this.txtBusqueda, this.cmbSucursal).subscribe(res => {
      this.objEmpleado = res;
      this.total = this.objEmpleado.length;
      this.cargando = 0;
      this.ocultarLoader();

    });




  }

  limpiar() {
    if (this.txtBusqueda == "") {
      if (this.lenghtIncial != this.objEmpleado.length) {
        this.listarEmpleado();
      }
    }
  }

  async verLoader() {
    const loading = await this.loadingController.create({
      cssClass: 'loader',
      message: 'Espere...'
    });
    await loading.present();
  }

  async ocultarLoader() {
    await this.loadingController.dismiss();

  }



  hola(event: any) {

    let obj = event.srcElement;
    let url = "../../../assets/icon/logo1.png";
    obj.src = url;


  }





}
