import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Comment } from '../../../../shared/models/comment.model';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css'],
})
export class ListCommentComponent implements OnInit, OnDestroy {
  @Input('listComment') listComment!: Comment[];

  constructor() {}

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
