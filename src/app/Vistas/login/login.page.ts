import { Modulo2Module } from './../../Modulos/modulo2/modulo2.module';
import { CommonModule } from '@angular/common';
import { MenuPrincipalPage } from './../menu-principal/menu-principal.page';
import { ToastController } from '@ionic/angular';
import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';


@NgModule({
  declarations: [LoginPage],
  imports: [
    CommonModule,
    Modulo2Module
  ],
})


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
numero=0;

  constructor(
    private ToastController: ToastController,
    private router:Router
    )
  {







   }


  ngOnInit() {


  }

  async toast(mensaje:any) {

    const toast = await this.ToastController.create({
      message:mensaje,
      duration: 1800 ,
      position:'top',


    });
    toast.present();

  }


  ingresar() {
    this.numero=1;
    localStorage.setItem('sesion',this.numero.toString())
    this.router.navigate(['/componente'])




  }

}
