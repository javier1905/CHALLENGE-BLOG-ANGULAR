import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosDashboardComponent } from './pages/todos-dashboard/todos-dashboard.component';
import { TodosService } from './services/todos.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterListTodoPipe } from './pipes/filter-list-todo.pipe';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { FormsModule } from '@angular/forms';
import { TodoDashboardComponent } from './pages/todo-dashboard/todo-dashboard.component';
import { TodoTemplateComponent } from './components/todo-template/todo-template.component';
import { MaterialModule } from '../material/material.module';
import { FiterTodoPipe } from './pipes/fiter-todo.pipe';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';

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
