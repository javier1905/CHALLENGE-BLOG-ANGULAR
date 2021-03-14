import { Component, OnInit, Input } from '@angular/core';

import { Album } from '../../models/album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-template',
  templateUrl: './album-template.component.html',
  styleUrls: ['./album-template.component.css'],
})
export class AlbumTemplateComponent implements OnInit {
  @Input('album') album!: Album;

  constructor(private router: Router) {}

  handleGoingToGallery() {
    this.router.navigate([`albums/${this.album.id}/gallery`]);
  }
  handleGoingToUser() {
    this.router.navigate([`users/${this.album.userId}`]);
  }

  ngOnInit(): void {}
}
