import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAlbumsDashboardComponent } from './pages/user-albums-dashboard/user-albums-dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { UsersPostsDashboardComponent } from './pages/users-posts-dashboard/users-posts-dashboard.component';

import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: 'users',
    // component: UsersComponent,
    children: [
      { path: 'list', component: UsersComponent },
      { path: ':id', component: UserComponent },
      { path: ':id/posts', component: UsersPostsDashboardComponent },
      { path: ':id/albums', component: UserAlbumsDashboardComponent },
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
