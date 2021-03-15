import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../../shared/models/user';

import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  userList: User[] = [];
  loading: boolean = true;

  sucriptionUserList: Subscription | undefined;

  constructor(private usersService: UsersService, private router: Router) {}

  handleGoToUser(idUser: string | Number) {
    this.router.navigate(['users', idUser]);
  }
  handleGoToPosts(idUser: string | Number) {
    this.router.navigate(['users', idUser, 'posts']);
  }
  handleGoToAlbums(idUser: string | Number) {
    this.router.navigate(['users', idUser, 'albums']);
  }
  handleGoToTodos(idUser: string | Number) {
    this.router.navigate(['users', idUser, 'todos']);
  }
  ngOnInit(): void {
    this.usersService.refreshList();
    this.sucriptionUserList = this.usersService.getList.subscribe({
      next: (userList: User[]) => {
        this.userList = userList;
        this.loading = false;
      },
    });
  }
  ngOnDestroy(): void {
    this.sucriptionUserList?.unsubscribe();
  }
}
