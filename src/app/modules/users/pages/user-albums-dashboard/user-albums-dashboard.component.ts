import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Album } from 'src/app/shared/models/album.model';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-user-albums-dashboard',
  templateUrl: './user-albums-dashboard.component.html',
  styleUrls: ['./user-albums-dashboard.component.css'],
})
export class UserAlbumsDashboardComponent implements OnInit, OnDestroy {
  listAlbum: Album[] = [];

  subscriptionListAlbumsByUser: Subscription | undefined;

  constructor(
    private usersService: UsersService,
    private _location: Location,
    private activatedRouter: ActivatedRoute
  ) {}

  handleGoBack(): void {
    this._location.back();
  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    if (id)
      this.subscriptionListAlbumsByUser = this.usersService
        .getAlbumByIdUser(id)
        .subscribe({
          next: (listAlbum: Album[]) => {
            this.listAlbum = listAlbum;
          },
        });
  }

  ngOnDestroy(): void {
    this.subscriptionListAlbumsByUser?.unsubscribe();
  }
}
