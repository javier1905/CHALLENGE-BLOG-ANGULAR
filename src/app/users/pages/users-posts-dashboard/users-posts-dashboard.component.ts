import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from 'src/app/posts/services/post.service';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/posts/models/post';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-users-posts-dashboard',
  templateUrl: './users-posts-dashboard.component.html',
  styleUrls: ['./users-posts-dashboard.component.css'],
})
export class UsersPostsDashboardComponent implements OnInit, OnDestroy {
  listPost: Post[] = [];

  subscriptionListPostByUser: Subscription | undefined;

  constructor(
    private postService: PostService,
    private _location: Location,
    private activatedRouter: ActivatedRoute
  ) {}

  handleGoBack(): void {
    this._location.back();
  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    if (id)
      this.subscriptionListPostByUser = this.postService
        .getPostsByUserId(id)
        .subscribe({
          next: (listPost: Post[]) => {
            this.listPost = listPost;
          },
        });
  }
  ngOnDestroy(): void {
    this.subscriptionListPostByUser?.unsubscribe();
  }
}
