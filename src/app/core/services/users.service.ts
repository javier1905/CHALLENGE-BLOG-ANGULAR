import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject, Subscription } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { Album } from 'src/app/shared/models/album.model';
import { Todo } from 'src/app/shared/models/todo.model';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  userList: User[] = [];
  private userListSujet = new Subject<User[]>();
  getList = this.userListSujet.asObservable();

  constructor(private http: HttpClient) {}

  refreshList(): void {
    let subscriptionUser: Subscription | undefined;
    subscriptionUser = this.http
      .get<User[]>(`${environment.url_api}/users`)
      .subscribe({
        next: (data: User[]) => {
          this.userListSujet.next((this.userList = data));
        },
        complete: () => {
          subscriptionUser?.unsubscribe();
        },
      });
  }
  getUserById(id: String) {
    return this.http.get<User>(`${environment.url_api}/users/${id}`);
  }
  getAlbumByIdUser(idUser: String | number) {
    return this.http.get<Album[]>(
      `${environment.url_api}/users/${idUser}/albums`
    );
  }
  getTodosByIdUser(idUser: String | number) {
    return this.http.get<Todo[]>(
      `${environment.url_api}/users/${idUser}/todos`
    );
  }
}
