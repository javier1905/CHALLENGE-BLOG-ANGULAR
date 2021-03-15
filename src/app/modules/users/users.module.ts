import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UsersRoutingModule } from './users-routing.module';

import { UserListComponent } from './components/user-list/user-list.component';
import { UsersComponent } from './pages/users/users.component';

import { UserTemplateComponent } from './components/user-template/user-template.component';
import { UserComponent } from './pages/user/user.component';
import { MaterialModule } from '../../core/material/material.module';

import { UsersPostsDashboardComponent } from './pages/users-posts-dashboard/users-posts-dashboard.component';
import { ListPostByUserComponent } from './components/list-post-by-user/list-post-by-user.component';
import { UserAlbumsDashboardComponent } from './pages/user-albums-dashboard/user-albums-dashboard.component';
import { ListAlbumByUserComponent } from './components/list-album-by-user/list-album-by-user.component';
import { UserTodosDashboardComponent } from './pages/user-todos-dashboard/user-todos-dashboard.component';
import { ListTodoByUserComponent } from './components/list-todo-by-user/list-todo-by-user.component';
import { UsersService } from 'src/app/core/services/users.service';
import { PostService } from 'src/app/core/services/post.service';

@NgModule({
  declarations: [
    UserListComponent,
    UsersComponent,
    UserTemplateComponent,
    UserComponent,
    UsersPostsDashboardComponent,
    ListPostByUserComponent,
    UserAlbumsDashboardComponent,
    ListAlbumByUserComponent,
    UserTodosDashboardComponent,
    ListTodoByUserComponent,
  ],
  imports: [CommonModule, UsersRoutingModule, HttpClientModule, MaterialModule],
  exports: [UserTemplateComponent],
  providers: [UsersService, PostService],
})
export class UsersModule {}
