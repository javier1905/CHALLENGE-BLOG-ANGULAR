import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { Todo } from 'src/app/todos/models/todo.model';

@Component({
  selector: 'app-user-todos-dashboard',
  templateUrl: './user-todos-dashboard.component.html',
  styleUrls: ['./user-todos-dashboard.component.css'],
})
export class UserTodosDashboardComponent implements OnInit, OnDestroy {
  listTodos: Todo[] = [];

  subscriptionListTodosByUser: Subscription | undefined;

  constructor(
    private usersService: UsersService,
    private _location: Location,
    private activatedRouter: ActivatedRoute
  ) {}

  handleGoBack(): void {
    this._location.back();
  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    if (id)
      this.subscriptionListTodosByUser = this.usersService
        .getTodosByIdUser(id)
        .subscribe({
          next: (listTodos: Todo[]) => {
            this.listTodos = listTodos;
          },
        });
  }

  ngOnDestroy(): void {
    this.subscriptionListTodosByUser?.unsubscribe();
  }
}
