import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { environment } from '../../../environments/environment.prod';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private mySubject = new Subject<Todo[]>();
  getListTodo$ = this.mySubject.asObservable();

  constructor(private http: HttpClient) {}

  refreshListTodos(): void {
    this.http.get<Todo[]>(`${environment.url_api}/todos`).subscribe({
      next: (listTodo: Todo[]) => {
        this.mySubject.next(listTodo);
      },
    });
  }
}
