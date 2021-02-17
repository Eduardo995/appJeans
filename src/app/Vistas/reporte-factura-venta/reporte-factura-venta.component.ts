import { ReporteVentaService } from './../../Servicios/reporte-venta.service';
import { FormsModule } from '@angular/forms';
import { IonicModule, LoadingController, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, OnInit, NgModule } from '@angular/core';
import { ReporteEmpleadosService } from 'src/app/Servicios/reporte-empleados.service';
import { Observable } from 'rxjs';


@NgModule({
  imports: [CommonModule, IonicModule, FormsModule],
  declarations: [ReporteFacturaVentaComponent]
})


@Component({
  selector: 'app-reporte-factura-venta',
  templateUrl: './reporte-factura-venta.component.html',
  styleUrls: ['./reporte-factura-venta.component.scss'],
})
export class ReporteFacturaVentaComponent implements OnInit {

  objSucursales:any=[];
  cmbSucursal="";
  desde="";
  hasta="";
  sesion:any;
  objVenta:any=[];
  total:number=0;
  numero:number=0;
  resCero:boolean=false;
  contador=0;


  constructor(private sucursal : ReporteEmpleadosService,
    private toastController:ToastController,
    private ReporteVenta:ReporteVentaService,
    private loadingController:LoadingController
    )
     {

      this.sesion = JSON.parse (JSON.stringify (localStorage.getItem('sucursal')));

    }

  ngOnInit( ) {

    this.listarSucursales();

  }

  listarSucursales()
  {
    this.sucursal.listarSucursales().subscribe(res=>{

      this.objSucursales=res;

    },error=>console.error(error))
  }




  async buscar()
  {

    if(this.desde=="" || this.hasta==""){
  
      this.toast("Seleccione un rango de fecha");
      
      return;
    }

    if(Date.parse(this.desde)>Date.parse(this.hasta)){

      this.toast("El rango de fecha seleccionado no es valido");
      return;
    }

    var f1=this.desde.split("T");
    var f2=this.hasta.split("T");

    await this.verLoader();

    this.ReporteVenta.listarVenta(this.sesion,f1[0],f2[0]).subscribe((res:any)=>
      {

     this.contador=0;
     this.numero=1;
    
          
        if(res.length ==0)
        {
          this.ocultarLoader();
          this.resCero=true;
          this.objVenta=[];
          this.total=0;
          this.numero=0;
        }
        else{


          this.objVenta=res;
          this.total=0;
          this.objVenta.forEach(item => {  
            this.contador=this.contador +1;
            this.total = this.total + parseFloat (item.total);
          
            this.resCero=false;
            this.ocultarLoader();
  
          });
          this.numero=this.contador;
     
  

        }

   

   

   




      },error=>console.log(error))



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




  async toast(mensaje:string) {
    const toast = await this.toastController.create({
      message:mensaje,
      duration: 2000,
      position:'top'
    });
    toast.present();
  }

}
