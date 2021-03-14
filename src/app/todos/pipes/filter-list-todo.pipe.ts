import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';

@Pipe({
  name: 'filterListTodo',
})
export class FilterListTodoPipe implements PipeTransform {
  transform(value: Todo[], completed: String, userId: Number): Todo[] {
    if (!value) return [];
    const listUpdatedTodoText = localStorage.getItem('updatedTodo');
    let listTodo: Todo[] = value;
    if (completed === 'completed')
      listTodo = value.filter((todo) => todo.completed === true);
    else if (completed === 'noCompleted')
      listTodo = value.filter((todo) => todo.completed === false);
    if (userId) listTodo = listTodo.filter((todo) => todo.userId === userId);
    if (listUpdatedTodoText !== null) {
      let listUpdatedTodo: Todo[] = JSON.parse(listUpdatedTodoText);
      listTodo = listTodo.map((todo: Todo) => {
        listUpdatedTodo.forEach((_todo: Todo) => {
          if (todo.id === _todo.id) {
            todo.completed = _todo.completed;
            return;
          }
        });
        return todo;
      });
    }
    return listTodo;
  }
}
