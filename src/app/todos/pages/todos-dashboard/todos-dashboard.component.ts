import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos-dashboard.component.html',
  styleUrls: ['./todos-dashboard.component.css'],
})
export class TodosDashboardComponent implements OnInit {
  listTodo!: Todo[];

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.todoService.refreshListTodos();
    this.todoService.getListTodo$.subscribe({
      next: (listTodo: Todo[]) => {
        this.listTodo = listTodo;
      },
    });
  }
}
