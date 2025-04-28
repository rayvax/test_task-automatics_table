import { Pipe, PipeTransform } from '@angular/core';
import { sortDirection, SortDirection } from '@model/sort';

@Pipe({
  name: 'sortByField',
})
export class SortByFieldPipe implements PipeTransform {
  transform<T extends object, K extends keyof T>(
    value: T[],
    filterField: K,
    direction: SortDirection = sortDirection.ASC,
  ): T[] {
    const directionMultiplier = direction === sortDirection.ASC ? -1 : 1;
    return value.sort((a, b) => {
      const ascSortValue = a[filterField] > b[filterField] ? 1 : -1;

      return ascSortValue * directionMultiplier;
    });
  }
}
