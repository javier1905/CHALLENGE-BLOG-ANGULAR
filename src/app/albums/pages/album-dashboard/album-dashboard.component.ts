import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-dashboard',
  templateUrl: './album-dashboard.component.html',
  styleUrls: ['./album-dashboard.component.css'],
})
export class AlbumDashboardComponent implements OnInit {
  album!: Album;

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
      this.albumService.getAlbumById(id).subscribe({
        next: (album: Album) => {
          this.album = album;
        },
      });
  }
}
