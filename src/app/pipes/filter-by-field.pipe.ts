import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByField',
})
export class FilterByFieldPipe implements PipeTransform {
  transform<T extends object>(arrayToFilter: T[], filterText: string): T[] {
    if (!filterText) {
      return arrayToFilter;
    }

    return arrayToFilter.filter((item) => {
      return Object.values(item).some((value) => {
        const stringValue = typeof value === 'string' ? value : String(value);

        return stringValue.toLocaleLowerCase().includes(filterText.toLocaleLowerCase());
      });
    });
  }
}
