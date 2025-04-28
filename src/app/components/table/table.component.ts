import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T extends object> implements OnInit {
  @Input() public headers: (keyof T)[];
  @Input() public data$: Observable<T[]>;
  @Input() public filter: { text: string; field: keyof T } = { text: '', field: '' as keyof T };

  constructor() {}

  ngOnInit(): void {}
}
