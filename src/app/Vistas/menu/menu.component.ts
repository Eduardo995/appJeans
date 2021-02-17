import { Componente } from './../../Interfaces/componente';
import { VariosService } from './../../Servicios/varios.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})


export class MenuComponent implements OnInit {

  componetes:Observable<Componente[]>;
  constructor(private servicio:VariosService,private router:Router) { }

  ngOnInit() {

    this.componetes=this.servicio.getMenuOpts();
  }

  cerrarSesion(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
