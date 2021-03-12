import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDashboardComponent } from './pages/todo-dashboard/todo-dashboard.component';
import { TodosDashboardComponent } from './pages/todos-dashboard/todos-dashboard.component';

const routes: Routes = [
  {
    path: 'todos',
    children: [
      {
        path: 'list',
        component: TodosDashboardComponent,
      },
      { path: ':id', component: TodoDashboardComponent },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
