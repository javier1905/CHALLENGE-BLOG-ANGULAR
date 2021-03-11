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
  show: boolean = false;

  suscriptionShow: Subscription | undefined;

  constructor(private commentService: CommentService) {}

  toggle(): void {
    this.show = !this.show;
    // this.commentService.show(!this.show);
  }

  ngOnInit(): void {
    console.log(this.listComment);

    // this.suscriptionShow = this.commentService.show$.subscribe({
    //   next: (show: boolean) => {
    //     this.show = show;
    //   },
    // });
  }
  ngOnDestroy(): void {
    // if (this.suscriptionShow) this.suscriptionShow.unsubscribe();
  }
}
