import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/albums/models/album.model';

@Component({
  selector: 'app-list-album-by-user',
  templateUrl: './list-album-by-user.component.html',
  styleUrls: ['./list-album-by-user.component.css'],
})
export class ListAlbumByUserComponent implements OnInit {
  @Input('listAlbum') listAlbum!: Album[];

  constructor() {}

  ngOnInit(): void {}
}
