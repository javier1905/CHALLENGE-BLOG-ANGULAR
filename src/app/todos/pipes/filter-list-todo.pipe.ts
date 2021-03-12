import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';

@Pipe({
  name: 'filterListTodo',
})
export class FilterListTodoPipe implements PipeTransform {
  transform(value: Todo[], completed: String, userId: Number): Todo[] {
    let listTodo: Todo[] = value;
    if (completed === 'completed')
      listTodo = value.filter((todo) => todo.completed === true);
    else if (completed === 'noCompleted')
      listTodo = value.filter((todo) => todo.completed === false);
    if (userId) listTodo = listTodo.filter((todo) => todo.userId === userId);
    return listTodo;
  }
}
