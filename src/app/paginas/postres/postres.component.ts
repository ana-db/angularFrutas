import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FRUTAS } from '../../frutas'

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.scss']
})
export class PostresComponent implements OnInit {

  idFruta: number;
  frutas : Array<any>;
  frutaSeleccionada: Array<any>;

  constructor(private route: ActivatedRoute) {

    console.trace('PostresComponent constructor');

    this.frutas = FRUTAS;

    this.idFruta = 1;
    this.route.params.subscribe( params => this.idFruta = params.pIdFruta ); //params devuelve un observable --> nos tenemos que subscribir
   
    this.frutaSeleccionada = this.frutas[this.idFruta-1]; 

  } //fin constructor

  ngOnInit() {
    console.trace('PostresComponent ngOnInit');
  }//fin ngOnInit

} //fin PostresComponent
