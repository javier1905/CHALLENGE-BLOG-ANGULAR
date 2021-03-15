import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../../../shared/models/todo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css'],
})
export class ListTodoComponent implements OnInit {
  @Input('listTodo') listTodo!: Todo[];

  idUserFilter: Number = 0;
  completedFilter: String = '';

  constructor(private router: Router) {}

  handleGoToTodo(idTodo: number): void {
    this.router.navigate(['todos', idTodo]);
  }

  ngOnInit(): void {}
}
