import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { Location } from '@angular/common';
import { CommentService } from '../../services/comment.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  myPost: Post;
  listComment!: Comment[];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService,
    private _location: Location
  ) {
    this.myPost = new Post();
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id)
      this.postService.getPostById(id).subscribe({
        next: (post: Post) => {
          this.myPost = post;
          this.commentService.getCommentsByPostId(this.myPost.id).subscribe({
            next: (listComment: Comment[]) => {
              this.listComment = listComment;
            },
          });
        },
      });
  }

  showComments(): void {}

  backClicked(): void {
    this.router.navigate(['posts/list']);
  }
  goToUserDetail(): void {
    this.router.navigate(['users/view', this.myPost.userId]);
  }
}
