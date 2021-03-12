import { Component, OnInit, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-template',
  templateUrl: './todo-template.component.html',
  styleUrls: ['./todo-template.component.css'],
})
export class TodoTemplateComponent implements OnInit {
  @Input('todo') todo!: Todo;

  constructor() {}

  handleChange(e: MatCheckboxChange): void {
    console.log(e.checked);

    alert('ando');
  }

  ngOnInit(): void {}
}
