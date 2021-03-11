import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-template',
  templateUrl: './post-template.component.html',
  styleUrls: ['./post-template.component.css'],
})
export class PostTemplateComponent implements OnInit {
  @Input('post') post!: Post;

  constructor() {}

  ngOnInit(): void {}
}
