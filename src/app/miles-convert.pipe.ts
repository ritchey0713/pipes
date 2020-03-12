import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milesConvert'
})
export class MilesConvertPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
