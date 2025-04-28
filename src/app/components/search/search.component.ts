import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() searchText = '';
  @Output() searchTextChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSearchChange() {
    this.searchTextChange.emit(this.searchText);
  }
}
