import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TodosService } from 'src/app/core/services/todos.service';
import { FiterTodoPipe } from 'src/app/shared/pipes/fiter-todo.pipe';
import { Todo } from '../../../../shared/models/todo.model';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css'],
  providers: [FiterTodoPipe],
})
export class TodoDashboardComponent implements OnInit, OnDestroy {
  myTodo!: Todo;

  suscriptionTodo: Subscription | undefined;

  constructor(
    private router: Router,
    private activatedToute: ActivatedRoute,
    private todosService: TodosService,
    private _filterTodoPipe: FiterTodoPipe
  ) {}

  handleGoBack(): void {
    this.router.navigate(['todos/list']);
  }
  ngOnInit(): void {
    this.suscriptionTodo = this.todosService.getTodo$.subscribe({
      next: (todo: Todo) => {
        this.myTodo = this._filterTodoPipe.transform(todo);
      },
    });

    const id = this.activatedToute.snapshot.paramMap.get('id');
    if (id) this.todosService.refreshTodoById(id);
  }
  ngOnDestroy(): void {
    this.suscriptionTodo?.unsubscribe();
  }
}
