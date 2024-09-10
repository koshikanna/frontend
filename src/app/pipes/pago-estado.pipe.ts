import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagoEstado'
})
export class PagoEstadoPipe implements PipeTransform {

  transform(value: number): string {
    return value === 1 ? 'Pagado' : 'No pagado';
  }
}
