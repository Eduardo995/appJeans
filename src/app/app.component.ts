import { LoginService } from './Servicios/login.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
export let browserRefresh = false;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  susbscription:Subscription;
  numero=0;
  usuario="";
  contra="";
  objLogin:any=[];


  constructor(
    private router:Router,
    private login:LoginService,
    private toastController: ToastController
    ) {

      if(localStorage.length>0){
        this.objLogin=localStorage;
        this.router.navigate(['/menuInicio']);
      }else{
        console.log("rdireccionar Login");
        this.objLogin=[];
        this.router.navigate(['/']);
      }


      //  {
      //    this.numero=1;
      //  }
      //  else{
      //   this.numero=0;
      //  }

      // this.susbscription = this.router.events.subscribe((event) => {
      //   if (event instanceof NavigationStart) {

      //     this.numero=1;
      //   }
      // });

  }


  async toast(mensaje:string) {
    const toast = await this.toastController.create({
      message:mensaje,
      duration: 2000,
      position:'top'
    });
    toast.present();
  }




  ingresar() {

  this.login.login(this.usuario,this.contra).subscribe(res=>
    {
      this.objLogin=res;
       if(this.objLogin.length == 0)
       {
         this.toast("Usuario o Contraseña Incorrecto Vuelva a intentarlo");
         this.objLogin=[];
       }
       else{
        let nombres=  this.objLogin.nombre + this.objLogin.apellido;
        localStorage.setItem('nombres',nombres);
        localStorage.setItem('sucursal',this.objLogin.idSucursal);
        this.objLogin=localStorage;
        this.usuario="";
        this.contra="";
        this.router.navigate(['/menuInicio']);
       }
    },error=> console.log(error));



  }



}
