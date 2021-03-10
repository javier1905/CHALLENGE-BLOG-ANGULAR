import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  userList: User[] = [];
  private userListSujet = new Subject<User[]>();
  getList = this.userListSujet.asObservable();

  constructor(private http: HttpClient) {}

  refreshList(): void {
    this.http
      .get<User[]>(`https://jsonplaceholder.typicode.com/users`)
      .subscribe({
        next: (data: User[]) => {
          this.userListSujet.next((this.userList = data));
        },
      });
  }
  getUserById(id: String) {
    return this.http.get<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }
}
