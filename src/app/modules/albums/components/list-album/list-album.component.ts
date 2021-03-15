import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../../../shared/models/album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-album',
  templateUrl: './list-album.component.html',
  styleUrls: ['./list-album.component.css'],
})
export class ListAlbumComponent implements OnInit {
  @Input('listAlbum') listAlbum!: Album[];

  constructor(private router: Router) {}

  handleGoingToAlbum(idAlbum: number | String) {
    this.router.navigate([`albums/${idAlbum}`]);
  }

  ngOnInit(): void {}
}
