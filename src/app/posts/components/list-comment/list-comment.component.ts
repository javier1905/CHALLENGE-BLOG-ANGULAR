import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Subscription } from 'rxjs';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css'],
})
export class ListCommentComponent implements OnInit, OnDestroy {
  @Input('listComment') listComment!: Comment[];

  suscriptionShow: Subscription | undefined;

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    console.log(this.listComment);
  }
  ngOnDestroy(): void {}
}
