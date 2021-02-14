import { Modulo2Module } from './../../Modulos/modulo2/modulo2.module';
import { CommonModule } from '@angular/common';


import { Component, OnInit, NgModule } from '@angular/core';
import { MenuController } from '@ionic/angular';

@NgModule({
  declarations: [ReporteEmpleadosPage],
  imports: [
    CommonModule,
    Modulo2Module
  ],
})


@Component({
  selector: 'app-reporte-empleados',
  templateUrl: './reporte-empleados.page.html',
  styleUrls: ['./reporte-empleados.page.scss'],
})





export class ReporteEmpleadosPage implements OnInit {

  constructor(  private menu: MenuController) {



  }

  ngOnInit() {

      this.menu.enable(true, 'primerMenu');
  }

}
