import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  // Value --> pipe value     filterstring: pipe parameter
  // value --> foodList       filterstring : searchedFood 
  transform(value: any, filterString: string): any {
    console.log('Pipe Trigerred......');
    if (filterString.length >= 3) {
      let searchedData = value.filter((item: any) => {
        return (item.food.toLowerCase().includes(filterString.toLocaleLowerCase()));
      });
      return searchedData;
    } else {
      return value;
    }
  }
}
