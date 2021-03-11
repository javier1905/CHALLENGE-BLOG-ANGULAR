import { Component, OnInit, Input } from '@angular/core';

import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-template',
  templateUrl: './album-template.component.html',
  styleUrls: ['./album-template.component.css'],
})
export class AlbumTemplateComponent implements OnInit {
  @Input('album') album!: Album;

  constructor() {}

  ngOnInit(): void {}
}
