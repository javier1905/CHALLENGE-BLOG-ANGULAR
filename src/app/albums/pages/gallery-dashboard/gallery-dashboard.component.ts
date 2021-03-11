import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '../../models/photo.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-gallery-dashboard',
  templateUrl: './gallery-dashboard.component.html',
  styleUrls: ['./gallery-dashboard.component.css'],
})
export class GalleryDashboardComponent implements OnInit {
  listPhoto!: Photo[];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id)
      this.albumService.getPhotosByAlbumId(id).subscribe({
        next: (listPhoto: Photo[]) => {
          this.listPhoto = listPhoto;
        },
      });
  }
}
