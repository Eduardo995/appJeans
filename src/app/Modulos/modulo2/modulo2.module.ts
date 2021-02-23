import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from 'src/app/Vistas/menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [ MenuComponent]

})
export class Modulo2Module { }
