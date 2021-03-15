import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosDashboardComponent } from './pages/todos-dashboard/todos-dashboard.component';

import { HttpClientModule } from '@angular/common/http';

import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { FormsModule } from '@angular/forms';
import { TodoDashboardComponent } from './pages/todo-dashboard/todo-dashboard.component';
import { TodoTemplateComponent } from './components/todo-template/todo-template.component';
import { MaterialModule } from '../../core/material/material.module';

import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { FilterListTodoPipe } from 'src/app/shared/pipes/filter-list-todo.pipe';
import { FiterTodoPipe } from 'src/app/shared/pipes/fiter-todo.pipe';
import { TodosService } from 'src/app/core/services/todos.service';

@NgModule({
  declarations: [
    TodosDashboardComponent,
    FilterListTodoPipe,
    ListTodoComponent,
    TodoDashboardComponent,
    TodoTemplateComponent,
    FiterTodoPipe,
    SnackBarComponent,
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [TodosService],
})
export class TodosModule {}
