import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  title: string;

  constructor() { 

    console.trace('InicioComponent constructor');

    this.title = 'Frutas';

  } //fin constructor

  
  ngOnInit() {
    console.trace('InicioComponent ngOnInit');
  } //fin constructor

} //InicioComponent
