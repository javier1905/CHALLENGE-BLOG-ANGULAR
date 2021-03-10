import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  userList: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.refreshList();
    this.usersService.getList.subscribe({
      next: (userList: User[]) => {
        this.userList = userList;
        console.log(this.userList);
      },
    });
  }
}
