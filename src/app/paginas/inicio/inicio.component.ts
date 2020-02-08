import { Component, OnInit } from '@angular/core';
import { FRUTAS } from '../../frutas'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  title: string;
  frutas : Array<any>;
  frutaSeleccionada: Array<any>;

  constructor() { 

    console.trace('InicioComponent constructor');

    this.title = 'Curiosidades sobre las frutas';
    this.frutas = FRUTAS;
    this.frutaSeleccionada = this.frutas[0]; 

  } //fin constructor

  
  ngOnInit() {
    console.trace('InicioComponent ngOnInit');
  } //fin ngOnInit


  //función para seleccionar una fruta y sacar su detalle: 
  seleccionarFruta = function(fruta){
    console.log('Hemos hecho click en la fruta %o', fruta ); 
    this.frutaSeleccionada = fruta;
  }


} //InicioComponent
