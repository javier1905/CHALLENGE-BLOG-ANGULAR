import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css'],
})
export class ListPostComponent implements OnInit {
  @Input('listPost') listPost!: Post[];

  constructor() {}

  ngOnInit(): void {}
}
