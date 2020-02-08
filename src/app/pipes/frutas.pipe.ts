import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'frutasFiltro'
})
export class FrutasPipe implements PipeTransform {

  transform(frutas: any, busqueda: string): any {

    console.trace('---------- empieza pipe ----------');
    console.debug('frutas', frutas); //contenido del array
    console.debug('busqueda', busqueda); //elementos por los que filtramos: nombre de la fruta, clasificacion o minerales
    console.trace('---------- termina pipe ----------');

    let resultado = frutas;

    //2) filtrar por NOMBRE, CLASIFICACION o MINERALES de la fruta:
    if( busqueda && '' !== busqueda ){ 

      busqueda = busqueda.toLowerCase();

      resultado = resultado.filter( (el) => {
        const minerales = el.minerales.reduce( (c,p) => c + p, '' ); //cogemos el array con todos los minerales y los reducimos a 1 string
        const encontrar = (el.nombre + el.clasificacion + minerales).toLowerCase(); //concatenamos el nombre de la fruta, la clasificacion y el string con los minerales y lo pasamos a minúsculas
        console.debug('encontrar', encontrar);
        return encontrar.includes(busqueda);  //includes indica si la cadena que tenemos guardada en "busqueda" está en "encontrar", si es asi, lo guarda en resultado para mostrarlo por pantalla
      });

    }

    return resultado;

  } //fin transform

} //fin FrutasPipe
