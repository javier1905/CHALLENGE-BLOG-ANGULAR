import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css'],
})
export class TodoDashboardComponent implements OnInit {
  myTodo!: Todo;

  suscriptionTodo: Subscription | undefined;

  constructor(
    private router: Router,
    private activatedToute: ActivatedRoute,
    private todosService: TodosService
  ) {}

  handleGoBack(): void {
    this.router.navigate(['todos/list']);
  }
  ngOnInit(): void {
    this.todosService.getTodo$.subscribe({
      next: (todo: Todo) => {
        this.myTodo = todo;
      },
    });

    const id = this.activatedToute.snapshot.paramMap.get('id');
    if (id) this.todosService.refreshTodoById(id);
  }
}
