// import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.scss'],
// })
// export class SearchComponent implements OnInit {
//   @Input() searchText = '';
//   @Output() searchTextChange = new EventEmitter<string>();

//   constructor() {}

//   ngOnInit(): void {}

//   onSearchChange() {
//     this.searchTextChange.emit(this.searchText);
//   }

//   onClear() {
//     this.searchText = '';
//     this.onSearchChange();
//   }
// }

import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchComponent),
      multi: true,
    },
  ],
})
export class SearchComponent implements ControlValueAccessor, OnInit {
  readonly searchForm = new FormControl('');

  writeValue() {}

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched() {}

  onChange(value: string) {}

  ngOnInit() {
    this.searchForm.valueChanges.subscribe((value) => this.onChange(value));
  }
}
