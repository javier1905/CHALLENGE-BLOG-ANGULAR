import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css'],
})
export class ListTodoComponent implements OnInit {
  @Input('listTodo') listTodo!: Todo[];

  idUserFilter: Number = 0;
  completedFilter: String = '';

  constructor() {}

  ngOnInit(): void {}
}
