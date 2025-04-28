// import { Component, Input, OnInit } from '@angular/core';
// import { sortDirection, SortDirection } from '@model/sort';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-table',
//   templateUrl: './table.component.html',
//   styleUrls: ['./table.component.scss'],
// })
// export class TableComponent<T extends object> implements OnInit {
//   @Input() public headers: (keyof T)[];
//   @Input() public data$: Observable<T[]>;
//   @Input() public filter = '';

//   public sort: { direction: SortDirection; column: keyof T } | null = null;

//   constructor() {}

//   ngOnInit(): void {}

//   public onSort(column: keyof T): void {
//     if (!this.sort || this.sort.column !== column) {
//       this.sort = { direction: sortDirection.ASC, column };
//       return;
//     }

//     switch (this.sort.direction) {
//       case sortDirection.ASC:
//         this.sort.direction = sortDirection.DESC;
//         break;
//       case sortDirection.DESC:
//         this.sort = null;
//         break;
//     }
//   }
// }

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { sortStrategyMap, sortDirectionToArrowMap } from '@app/constants';
import { Sort, SortDirections } from '@model/sort';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  private readonly data$ = new BehaviorSubject<string[][]>([]);
  private readonly sort$ = new BehaviorSubject<Sort | null>(null);
  readonly sortedData$ = this.getSortedData$();

  readonly sortDirections = SortDirections;
  readonly sortToArrowMap = sortDirectionToArrowMap;

  @Input() headers: string[]; //public лучше не писать только отвлекает

  //поток раскрываем перед компонентом
  @Input() set data(data: string[][]) {
    this.data$.next(data); // и если надо пробрасываем во внутренний поток
  }

  get sort(): Sort | null {
    return this.sort$.value;
  }

  onSort(index: number) {
    if (!this.sort || !(this.sort.column === index)) {
      this.sort$.next(new Sort(index));

      return;
    }

    this.sort$.next(this.sort.next(this.sort.column));
  }

  getSortedData$(): Observable<string[][]> {
    return combineLatest([this.data$, this.sort$]).pipe(
      map(([data, sort]) => {
        if (!sort || sort.direction === SortDirections.None) {
          return data;
        }

        const sorted = data.sort((a, b) => sortStrategyMap.get(sort.direction)!(sort.column, a, b));

        return sorted;
      }),
    );
  }
}
