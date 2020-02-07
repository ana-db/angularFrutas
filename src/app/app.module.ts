import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComparadorFutasComponent } from './paginas/comparador-futas/comparador-futas.component';
import { ComparadorComponent } from './paginas/comparador/comparador.component';
import { InicioComponent } from './inicio/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ComparadorFutasComponent,
    ComparadorComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
