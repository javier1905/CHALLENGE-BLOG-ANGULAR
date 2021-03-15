import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../../../shared/models/comment.model';

@Component({
  selector: 'app-comment-template',
  templateUrl: './comment-template.component.html',
  styleUrls: ['./comment-template.component.css'],
})
export class CommentTemplateComponent implements OnInit {
  @Input('comment') comment?: Comment;

  constructor() {}

  ngOnInit(): void {}
}
