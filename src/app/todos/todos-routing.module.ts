import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosDashboardComponent } from './pages/todos-dashboard/todos-dashboard.component';

const routes: Routes = [
  {
    path: 'todos',
    children: [
      {
        path: 'list',
        component: TodosDashboardComponent,
      },
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
