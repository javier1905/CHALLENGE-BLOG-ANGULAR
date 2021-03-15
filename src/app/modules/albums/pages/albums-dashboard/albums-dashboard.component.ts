import { Component, OnInit, OnDestroy } from '@angular/core';
import { Album } from '../../../../shared/models/album.model';

import { Subscription } from 'rxjs';
import { AlbumService } from 'src/app/core/services/album.service';

@Component({
  selector: 'app-albums-dashboard',
  templateUrl: './albums-dashboard.component.html',
  styleUrls: ['./albums-dashboard.component.css'],
})
export class AlbumsDashBoardComponent implements OnInit, OnDestroy {
  listAlbum!: Album[];
  loading: boolean = true;

  subscriptionAlbumList: Subscription | undefined;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.subscriptionAlbumList = this.albumService.getList().subscribe({
      next: (listAlbum: Album[]) => {
        this.listAlbum = listAlbum;
        this.loading = false;
      },
    });
  }
  ngOnDestroy(): void {
    this.subscriptionAlbumList?.unsubscribe();
  }
}
