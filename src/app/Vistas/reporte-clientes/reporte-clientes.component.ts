import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit, NgModule } from '@angular/core';
import { ReporteClientesService } from 'src/app/Servicios/reporte-clientes.service';
import { CommonModule } from "@angular/common";
import { LoadingController } from '@ionic/angular';


@NgModule({
  imports: [CommonModule,IonicModule,FormsModule],
  declarations: [ReporteClientesComponent]
})

@Component({
  selector: 'app-reporte-clientes',
  templateUrl: './reporte-clientes.component.html',
  styleUrls: ['./reporte-clientes.component.scss'],
})
export class ReporteClientesComponent implements OnInit {

  objCliente: any = [];
  objSucursales:any=[];
  cmbSucursal="";
  total:number=0;
  txtBusqueda="";
  cargando=1;
  lenghtIncial=0;

  constructor(private clientes: ReporteClientesService,public loadingController: LoadingController) { }

  ngOnInit() {
    this.listarSucursales();

  }

  async listarCliente() {
    this.txtBusqueda="";
    this.cargando=1;
    await this.verLoader();
    this.clientes.listarCliente(this.cmbSucursal).subscribe(res => {
      this.objCliente = res;
      this.total=this.objCliente.length;
      this.lenghtIncial=this.objCliente.length;
      this.cargando=0;
      this.ocultarLoader();
    })

  }

  listarSucursales(){
    this.clientes.listarSucursales().subscribe(res=>{
      this.objSucursales=res;
    });
  }

  async buscar(){
      this.objCliente=[];
      if(this.txtBusqueda==""){
        this.listarCliente();
      return;
      }
      await this.verLoader();
      this.cargando=1;
      this.clientes.buscarCliente(this.txtBusqueda,this.cmbSucursal).subscribe(res=>{
         this.objCliente=res;
         this.total=this.objCliente.length;
         this.cargando=0;
         this.ocultarLoader();

      });




  }

  limpiar(){
    if(this.txtBusqueda==""){
      if(this.lenghtIncial!=this.objCliente.length){
        this.listarCliente();
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

}
