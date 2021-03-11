import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-list-photo',
  templateUrl: './list-photo.component.html',
  styleUrls: ['./list-photo.component.css'],
})
export class ListPhotoComponent implements OnInit {
  @Input('listPhoto') listPhoto!: Photo[];

  constructor() {}

  ngOnInit(): void {}
}
