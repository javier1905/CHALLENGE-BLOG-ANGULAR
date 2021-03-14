import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  userList: User[] = [];

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
      },
    });
  }
  ngOnDestroy(): void {
    this.sucriptionUserList?.unsubscribe();
  }
}
