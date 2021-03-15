import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { environment } from '../../../environments/environment.prod';
import { Post } from 'src/app/shared/models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private sujetListUser = new Subject<Post[]>();
  getList = this.sujetListUser.asObservable();

  constructor(private http: HttpClient) {}

  refreshList(): void {
    this.http.get<Post[]>(`${environment.url_api}/posts`).subscribe({
      next: (listPost: Post[]) => {
        this.sujetListUser.next(listPost);
      },
    });
  }
  getPostById(id: String) {
    return this.http.get<Post>(`${environment.url_api}/posts/${id}`);
  }
  getPostsByUserId(idUser: String | Number) {
    return this.http.get<Post[]>(
      `${environment.url_api}/users/${idUser}/posts`
    );
  }
}
