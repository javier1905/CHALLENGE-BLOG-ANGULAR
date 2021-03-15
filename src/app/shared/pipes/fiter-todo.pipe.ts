import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';

@Pipe({
  name: 'fiterTodo',
})
export class FiterTodoPipe implements PipeTransform {
  transform(value: Todo): Todo {
    if (!value) return value;
    let listTodo = localStorage.getItem('updatedTodo');
    if (listTodo === null) return value;
    else {
      let listTodoArray: Todo[] = JSON.parse(listTodo);
      listTodoArray.forEach((todo: Todo) => {
        if ((todo.id = value.id)) {
          value.completed = todo.completed;
        }
      });
      return value;
    }
  }
}
