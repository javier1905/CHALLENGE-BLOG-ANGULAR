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

  private mySubjectTodo = new Subject<Todo>();
  getTodo$ = this.mySubjectTodo.asObservable();

  constructor(private http: HttpClient) {}

  refreshListTodos(): void {
    this.http.get<Todo[]>(`${environment.url_api}/todos`).subscribe({
      next: (listTodo: Todo[]) => {
        this.mySubject.next(listTodo);
      },
    });
  }

  refreshTodoById(idTodo: Number | String): void {
    this.http.get<Todo>(`${environment.url_api}/todos/${idTodo}`).subscribe({
      next: (todo: Todo) => {
        this.mySubjectTodo.next(todo);
      },
    });
  }
  updateTodo(idTodo: Number | String) {
    return this.http.put<Todo>(`${environment.url_api}/todos/${idTodo}`, {});
  }
}
