import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, discount: number): any {
    if (value > 100) {
      return value * (1 - (discount / 100));
    }
    else {
      return value;
    }
  }

}
