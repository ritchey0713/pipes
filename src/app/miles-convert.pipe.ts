import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milesConvert'
})
export class MilesConvertPipe implements PipeTransform {

  transform(value: any, targetUnits: string): any {
    if(!value){
      return
    }

    switch(targetUnits){
      case 'km':
      return value * 1.60934;
      case "m":
        return value * 1.60934 * 1000;
      case "cm":
      return value * 1.60934 * 1000 * 1000;
      default:
        throw new Error("target unit not found!")
    }
  }

}
