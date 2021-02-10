import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
hola="hola que hace";
  constructor(public toastController: ToastController) { }

  ngOnInit() {


  }

   async ingresar()
  {
    const toast = await this.toastController.create({
      message: 'El usuario no se encuentra registrado' ,
      position:'top',
      duration: 2000,
   
    });
    toast.present();
  }

}
