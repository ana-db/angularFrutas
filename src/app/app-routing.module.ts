import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComparadorComponent } from './paginas/comparador/comparador.component';
import { InicioComponent } from './paginas/inicio/inicio.component';



const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'comparador', component: ComparadorComponent},
];


export const RUTAS =  [
  {
    'ruta' : '/',
    'nombre' : 'Inicio'
  },
  {
    'ruta' : '/comparador',
    'nombre' : 'Comparador'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
