import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';

import { Subscription } from 'rxjs';
import { Comment } from '../../../../shared/models/comment.model';
import { Post } from 'src/app/shared/models/post';
import { PostService } from 'src/app/core/services/post.service';
import { CommentService } from 'src/app/core/services/comment.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, OnDestroy {
  myPost: Post;
  listComment: Comment[] = [];
  subscriptionPost: Subscription | undefined;
  subscriptionComments: Subscription | undefined;
  loading: boolean = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService
  ) {
    this.myPost = new Post();
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id)
      this.subscriptionPost = this.postService.getPostById(id).subscribe({
        next: (post: Post) => {
          this.myPost = post;
          this.subscriptionComments = this.commentService
            .getCommentsByPostId(this.myPost.id)
            .subscribe({
              next: (listComment: Comment[]) => {
                this.listComment = listComment;
                this.loading = false;
              },
              complete: () => {
                this.subscriptionComments?.unsubscribe();
              },
            });
        },
      });
  }

  backClicked(): void {
    this.router.navigate(['posts/list']);
  }
  goToUserDetail(): void {
    this.router.navigate(['users/view', this.myPost.userId]);
  }

  ngOnDestroy(): void {
    this.subscriptionPost?.unsubscribe();
  }
}
