import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let result = '';
    switch (value) {
      case 0: 
        result = 'Available';
        break;
      case 1: 
        result = 'Serving';
        break;
      default: 
        result = 'N/A';
        break;
    }
    return result;
  }

}
