import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  myUser: User;

  constructor(
    private router: Router,
    private activatesRouter: ActivatedRoute,
    private usersService: UsersService
  ) {
    this.myUser = new User();
  }

  ngOnInit(): void {
    const id = this.activatesRouter.snapshot.paramMap.get('id');
    if (id !== null)
      this.usersService.getUserById(id).subscribe({
        next: (user: User) => {
          this.myUser = user;
        },
      });
  }
}
