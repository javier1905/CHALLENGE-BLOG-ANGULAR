import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  myUser: User;

  subscriptionUser: Subscription | undefined;

  constructor(
    private activatesRouter: ActivatedRoute,
    private usersService: UsersService,
    private _location: Location
  ) {
    this.myUser = new User();
  }

  goBack(): void {
    this._location.back();
  }

  ngOnInit(): void {
    const id = this.activatesRouter.snapshot.paramMap.get('id');
    if (id !== null)
      this.subscriptionUser = this.usersService.getUserById(id).subscribe({
        next: (user: User) => {
          this.myUser = user;
        },
      });
  }

  ngOnDestroy(): void {
    this.subscriptionUser?.unsubscribe();
  }
}
