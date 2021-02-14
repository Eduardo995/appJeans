
import { Modulo2Module } from './../../Modulos/modulo2/modulo2.module';
import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MenuPrincipalPage],
  imports: [
    CommonModule,
    Modulo2Module
  ],
})


@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})


export class MenuPrincipalPage  implements OnInit {

  constructor(private router:Router,
    private Menu: MenuController) {
    }

  ngOnInit() {
  }


}
