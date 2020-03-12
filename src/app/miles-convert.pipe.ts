import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milesConvert'
})
export class MilesConvertPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(!value){
      return
    }
    return value * 1.60934;
  }

}
