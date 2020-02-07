import { Component, OnInit } from '@angular/core';
import { FRUTAS } from 'src/app/frutas';

@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.scss']
})
export class ComparadorComponent implements OnInit {

  frutas: Array<any>;
  fruta1: any;
  fruta2: any;

  constructor() { 

    console.trace('ComparadorComponent constructor');

    this.frutas = FRUTAS;

    this.fruta1 = this.frutas[0];
    this.fruta2 = this.frutas[1];

  } //fin constructor


  ngOnInit() {

    console.trace('ComparadorComponent ngOnInit');

  } //fin ngOnInit


  seleccionarFruta( frutaSeleccionada: any) {
    console.debug('click frutaSeleccionada', frutaSeleccionada);    
    this.fruta2 = this.fruta1;
    this.fruta1 = frutaSeleccionada;
  }

} //fin ComparadorComponent
