import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums-dashboard',
  templateUrl: './albums-dashboard.component.html',
  styleUrls: ['./albums-dashboard.component.css'],
})
export class AlbumsDashBoardComponent implements OnInit {
  listAlbum!: Album[];

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getList().subscribe({
      next: (listAlbum: Album[]) => {
        this.listAlbum = listAlbum;
      },
    });
  }
}
