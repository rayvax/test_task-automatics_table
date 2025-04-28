import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByField',
})
export class FilterByFieldPipe implements PipeTransform {
  transform<T extends object, K extends keyof T>(value: T[], filterText: string, filterField: K): T[] {
    if (!filterText) {
      return value;
    }

    return value.filter((v) => {
      const fieldValue = v[filterField];

      const stringValue = typeof fieldValue === 'string' ? fieldValue : String(fieldValue);

      return stringValue.toLocaleLowerCase().includes(filterText.toLocaleLowerCase());
    });
  }
}
