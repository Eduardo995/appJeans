import { Componente } from './../../Interfaces/componente';
import { VariosService } from './../../Servicios/varios.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})


export class MenuComponent implements OnInit {

  componetes:Observable<Componente[]>;
  constructor(private servicio:VariosService) { }

  ngOnInit() {

    this.componetes=this.servicio.getMenuOpts();
  }

}
