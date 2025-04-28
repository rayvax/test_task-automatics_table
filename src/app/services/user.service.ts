import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private readonly http: HttpClient) {}

  getUsers$(): Observable<User[]> {
    //если возвращаем поток то добавляем постфикс $
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }
}
