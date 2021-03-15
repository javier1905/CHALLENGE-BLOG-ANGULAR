import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Album } from '../../../../shared/models/album.model';

import { Subscription } from 'rxjs';
import { AlbumService } from 'src/app/core/services/album.service';

@Component({
  selector: 'app-album-dashboard',
  templateUrl: './album-dashboard.component.html',
  styleUrls: ['./album-dashboard.component.css'],
})
export class AlbumDashboardComponent implements OnInit, OnDestroy {
  album!: Album;

  subscriptionAlbum: Subscription | undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  handleGoBack(): void {
    this.router.navigate(['albums/list']);
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id !== null)
      this.subscriptionAlbum = this.albumService.getAlbumById(id).subscribe({
        next: (album: Album) => {
          this.album = album;
        },
      });
  }
  ngOnDestroy(): void {
    this.subscriptionAlbum?.unsubscribe();
  }
}
