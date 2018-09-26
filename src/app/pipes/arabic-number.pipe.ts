import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arabicNumber'
})
export class ArabicNumberPipe implements PipeTransform {

  transform(number: number) {
    var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return number.toString().replace(/[0-9]/g, function (w) {
      return id[+w]
    });
  }

}
