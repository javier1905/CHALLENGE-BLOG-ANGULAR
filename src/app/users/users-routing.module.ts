import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';

import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: 'users',
    // component: UsersComponent,
    children: [
      { path: 'list', component: UsersComponent },
      { path: 'view/:id', component: UserComponent },
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
export class UsersRoutingModule {}
