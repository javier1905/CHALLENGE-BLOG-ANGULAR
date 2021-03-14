import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodosService } from '../../services/todos.service';
import { Subscription } from 'rxjs';

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
