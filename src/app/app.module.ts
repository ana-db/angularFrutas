import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComparadorComponent } from './paginas/comparador/comparador.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FrutasPipe } from './pipes/frutas.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ComparadorComponent,
    InicioComponent,
    NavbarComponent,
    FrutasPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, //módulo para usar formularios
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
