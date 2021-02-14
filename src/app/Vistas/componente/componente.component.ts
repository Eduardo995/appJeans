import { Modulo2Module } from './../../Modulos/modulo2/modulo2.module';
import { CommonModule } from '@angular/common';
import { Component, OnInit, NgModule } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';



@NgModule({
  declarations: [ComponenteComponent],
  imports: [
    CommonModule,
    Modulo2Module
  ],
})



@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class ComponenteComponent implements OnInit {




  ngOnInit() {}

}
