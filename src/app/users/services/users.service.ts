import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { Album } from 'src/app/albums/models/album.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  userList: User[] = [];
  private userListSujet = new Subject<User[]>();
  getList = this.userListSujet.asObservable();

  constructor(private http: HttpClient) {}

  refreshList(): void {
    this.http.get<User[]>(`${environment.url_api}/users`).subscribe({
      next: (data: User[]) => {
        this.userListSujet.next((this.userList = data));
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
}
