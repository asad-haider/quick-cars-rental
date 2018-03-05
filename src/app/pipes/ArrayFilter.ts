import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ArrayFilter',
  pure: false
})
export class ArrayFilter implements PipeTransform {
  transform(items: any[], filterOn: string, filterBy: string): any {
    if (!items || !filterOn || !filterBy) {
      return items;
    }
    return items.filter(item => item[filterOn] == filterBy);
  }
}
