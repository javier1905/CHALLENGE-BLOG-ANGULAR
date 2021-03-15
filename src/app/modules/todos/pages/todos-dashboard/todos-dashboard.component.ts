import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from '../../../../shared/models/todo.model';

import { Subscription } from 'rxjs';
import { TodosService } from 'src/app/core/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos-dashboard.component.html',
  styleUrls: ['./todos-dashboard.component.css'],
})
export class TodosDashboardComponent implements OnInit, OnDestroy {
  listTodo!: Todo[];
  subscriptionListTodo: Subscription | undefined;

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.todoService.refreshListTodos();
    this.subscriptionListTodo = this.todoService.getListTodo$.subscribe({
      next: (listTodo: Todo[]) => {
        this.listTodo = listTodo;
      },
    });
  }

  ngOnDestroy(): void {
    this.subscriptionListTodo?.unsubscribe();
  }
}
