import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-list-post-by-user',
  templateUrl: './list-post-by-user.component.html',
  styleUrls: ['./list-post-by-user.component.css'],
})
export class ListPostByUserComponent implements OnInit {
  @Input('listPost') listPost!: Post[];

  constructor() {}

  ngOnInit(): void {}
}
