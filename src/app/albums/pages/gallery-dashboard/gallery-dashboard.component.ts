import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../../models/photo.model';
import { AlbumService } from '../../services/album.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gallery-dashboard',
  templateUrl: './gallery-dashboard.component.html',
  styleUrls: ['./gallery-dashboard.component.css'],
})
export class GalleryDashboardComponent implements OnInit, OnDestroy {
  listPhoto!: Photo[];

  subscriptionListPhotos: Subscription | undefined;

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
      },
    });
  }
  ngOnDestroy(): void {
    this.subscriptionListPhotos?.unsubscribe();
  }
}
