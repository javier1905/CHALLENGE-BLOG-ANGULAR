import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/todos/models/todo.model';

@Component({
  selector: 'app-list-todo-by-user',
  templateUrl: './list-todo-by-user.component.html',
  styleUrls: ['./list-todo-by-user.component.css'],
})
export class ListTodoByUserComponent implements OnInit {
  @Input('listTodos') listTodos!: Todo[];
  constructor() {}

  ngOnInit(): void {}
}
