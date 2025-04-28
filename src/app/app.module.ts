import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HasValuePipe } from './pipes/has-value.pipe';
import { SortByFieldPipe } from './pipes/sort-by-field.pipe';

@NgModule({
  declarations: [AppComponent, TableComponent, SearchComponent, HasValuePipe, SortByFieldPipe],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
