import { MenuPrincipalComponent } from './Vistas/menu-principal/menu-principal.component';
import { LoginComponent } from './Vistas/login/login.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'menuPrincipal', component:MenuPrincipalComponent},
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'**',pathMatch:'full',redirectTo:'login'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
