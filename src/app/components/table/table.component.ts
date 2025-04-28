import { Component, Input, OnInit } from '@angular/core';
import { sortDirection, SortDirection } from '@model/sort';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T extends object> implements OnInit {
  @Input() public headers: (keyof T)[];
  @Input() public data$: Observable<T[]>;
  @Input() public filter = '';

  public sort: { direction: SortDirection; column: keyof T } | null = null;

  constructor() {}

  ngOnInit(): void {}

  public onSort(column: keyof T): void {
    if (!this.sort || this.sort.column !== column) {
      this.sort = { direction: sortDirection.ASC, column };
      return;
    }

    switch (this.sort.direction) {
      case sortDirection.ASC:
        this.sort.direction = sortDirection.DESC;
        break;
      case sortDirection.DESC:
        this.sort = null;
        break;
    }
  }
}
