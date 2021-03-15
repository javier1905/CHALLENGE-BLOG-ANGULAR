import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { Photo } from 'src/app/shared/models/photo.model';
import { AlbumService } from 'src/app/core/services/album.service';

@Component({
  selector: 'app-gallery-dashboard',
  templateUrl: './gallery-dashboard.component.html',
  styleUrls: ['./gallery-dashboard.component.css'],
})
export class GalleryDashboardComponent implements OnInit, OnDestroy {
  listPhoto!: Photo[];
  loading: boolean = true;

  subscriptionListPhotos: Subscription | undefined;

  showLoading() {
    this.loading = true;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private albumService: AlbumService,
    private _location: Location
  ) {}

  handleGoBack(): void {
    this._location.back();
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) this.albumService.getPhotosByAlbumId(id);
    this.subscriptionListPhotos = this.albumService.getListPhotos$.subscribe({
      next: (listPhotos: Photo[]) => {
        this.listPhoto = listPhotos;
        this.loading = false;
      },
    });
  }
  ngOnDestroy(): void {
    this.subscriptionListPhotos?.unsubscribe();
  }
}
