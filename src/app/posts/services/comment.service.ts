import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  getCommentsByPostId(idPost: Number) {
    return this.http.get<Comment[]>(
      `${environment.url_api}/posts/${idPost}/comments`
    );
  }
}
