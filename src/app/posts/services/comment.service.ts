import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Comment } from '../models/comment.model';
// import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  // private showSujet = new Subject<boolean>();
  // show$ = this.showSujet.asObservable();

  constructor(private http: HttpClient) {}

  getCommentsByPostId(idPost: Number) {
    console.log(`${environment.url_api}/posts/${idPost}/comments`);

    return this.http.get<Comment[]>(
      `${environment.url_api}/posts/${idPost}/comments`
    );
  }

  // show(show: boolean): void {
  //   this.showSujet.next(show);
  // }
}
