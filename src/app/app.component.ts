import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
export let browserRefresh = false;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  susbscription:Subscription;


  numero=0;
  constructor(
    private router:Router,


    ) {



      this.numero=parseInt(localStorage.getItem('sesion'));


      if(localStorage.getItem('sesion')== null)
      {
         this.numero=0;
      }


      if(this.numero == 1)
      {

        this.router.navigate(['/componente']);
      }
      else
      {
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




  ingresar() {


    this.numero=1;
    localStorage.setItem('sesion',this.numero.toString())
    this.router.navigate(['/componente'])




  }
}
