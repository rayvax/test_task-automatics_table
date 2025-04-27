import { Component, OnInit } from '@angular/core';
import { mockUsers } from '@data/users';
import { User } from '@model/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public headers: (keyof User)[] = ['id', 'name', 'email', 'phone'];
  public data: User[] = mockUsers;

  constructor() {}

  ngOnInit(): void {}
}
