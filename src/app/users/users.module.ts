import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UsersRoutingModule } from './users-routing.module';

import { UserListComponent } from './components/user-list/user-list.component';
import { UsersComponent } from './pages/users/users.component';
import { UsersService } from './services/users.service';
import { UserTemplateComponent } from './components/user-template/user-template.component';
import { UserComponent } from './pages/user/user.component';

@NgModule({
  declarations: [UserListComponent, UsersComponent, UserTemplateComponent, UserComponent],
  imports: [CommonModule, UsersRoutingModule, HttpClientModule],
  providers: [UsersService],
})
export class UsersModule {}
