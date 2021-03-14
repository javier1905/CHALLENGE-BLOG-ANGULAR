import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Subscription } from 'rxjs';

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
    let subscritionlistTodo: Subscription | undefined;
    subscritionlistTodo = this.http
      .get<Todo[]>(`${environment.url_api}/todos`)
      .subscribe({
        next: (listTodo: Todo[]) => {
          this.mySubject.next(listTodo);
        },
        complete: () => {
          subscritionlistTodo?.unsubscribe();
        },
      });
  }

  refreshTodoById(idTodo: Number | String): void {
    let subscritionlistTodos: Subscription | undefined;
    subscritionlistTodos = this.http
      .get<Todo>(`${environment.url_api}/todos/${idTodo}`)
      .subscribe({
        next: (todo: Todo) => {
          this.mySubjectTodo.next(todo);
        },
        complete: () => {
          subscritionlistTodos?.unsubscribe();
        },
      });
  }
  updateTodo(idTodo: Number | String) {
    return this.http.put<Todo>(`${environment.url_api}/todos/${idTodo}`, {});
  }
}
