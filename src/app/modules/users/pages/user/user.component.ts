import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../../shared/models/user';

import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  myUser: User;
  loading: boolean = true;

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
          this.loading = false;
        },
      });
  }

  ngOnDestroy(): void {
    this.subscriptionUser?.unsubscribe();
  }
}
