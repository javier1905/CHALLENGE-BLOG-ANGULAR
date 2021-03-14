import { Component, OnInit, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

import { Todo } from '../../models/todo.model';
import { FiterTodoPipe } from '../../pipes/fiter-todo.pipe';
import { TodosService } from '../../services/todos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-todo-template',
  templateUrl: './todo-template.component.html',
  styleUrls: ['./todo-template.component.css'],
  providers: [FiterTodoPipe],
})
export class TodoTemplateComponent implements OnInit {
  @Input('todo') todo!: Todo;

  constructor(
    private todosService: TodosService,
    private _snackBar: MatSnackBar
  ) {}

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, { duration: 2500 });
  }

  handleChange(e: MatCheckboxChange): void {
    this.todosService.updateTodo(this.todo.id).subscribe({
      next: (updatedTodo: Todo) => {
        var checked: boolean = false;

        let listUpdated = localStorage.getItem('updatedTodo');
        const UpTodo: Todo = {
          userId: 0,
          title: '',
          id: updatedTodo.id,
          completed: e.checked,
        };

        if (listUpdated === null) {
          let array: Todo[] = [];
          array.push(UpTodo);
          localStorage.setItem('updatedTodo', JSON.stringify(array));
        } else {
          let listUpdatedArray: Todo[] = JSON.parse(listUpdated);

          let arrayUpdatedTodo = listUpdatedArray.map((_updatedTodo: Todo) => {
            if (_updatedTodo.id === updatedTodo.id) {
              checked = true;
              _updatedTodo.completed = e.checked;
              return _updatedTodo;
            } else return _updatedTodo;
          });
          if (checked) {
            localStorage.setItem(
              'updatedTodo',
              JSON.stringify(arrayUpdatedTodo)
            );
          } else {
            listUpdatedArray.push(UpTodo);
            localStorage.setItem(
              'updatedTodo',
              JSON.stringify(listUpdatedArray)
            );
          }
        }
        this.openSnackBar();
      },
    });
  }

  ngOnInit(): void {}
}
