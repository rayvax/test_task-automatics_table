import { Pipe, PipeTransform } from '@angular/core';
import { User } from '@model/user';

@Pipe({
  name: 'transform',
})
export class TransformPipe implements PipeTransform {
  transform(data: User[]): string[][] {
    if (!data?.length) {
      return [];
    }

    return data.map((row) => [String(row.id), row.name, row.email, row.phone]);
  }
}
