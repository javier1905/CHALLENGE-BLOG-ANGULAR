import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Post } from '../models/post';
import { environment } from '../../../environments/environment.prod';

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
}
