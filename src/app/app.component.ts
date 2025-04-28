import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '@model/user';
import { UserService } from '@services/user.service';
import { combineLatest, map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly searchForm = new FormControl('');
  readonly title = 'automatics test task';
  private readonly users$: Observable<User[]> = this.userService.getUsers$();
  readonly filteredData$: Observable<User[]> = this.getFilteredData$();

  constructor(private readonly userService: UserService) {}

  getFilteredData$(): Observable<User[]> {
    return combineLatest([this.users$, this.searchForm.valueChanges.pipe(startWith(''))]).pipe(
      map(([users, filter]) =>
        users.filter((item) => {
          return Object.values(item).some((value) => {
            // const stringValue = typeof value === 'string' ? value : String(value); //Упрощаем String(value)

            return String(value).toLocaleLowerCase().includes(filter.toLocaleLowerCase());
          });
        }),
      ),
    );
  }
}
