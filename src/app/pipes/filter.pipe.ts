import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arreglo:any[], texto:string, columna):any[] {
    console.log(arreglo)
    if( texto == ""){
        return arreglo;
    }else{
        texto = texto.toLowerCase();
        return arreglo.filter(item => {
            return item[columna].toLowerCase().includes(texto)
        })
    }

}

}
