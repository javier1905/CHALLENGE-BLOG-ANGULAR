import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from 'src/app/shared/models/post';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-users-posts-dashboard',
  templateUrl: './users-posts-dashboard.component.html',
  styleUrls: ['./users-posts-dashboard.component.css'],
})
export class UsersPostsDashboardComponent implements OnInit, OnDestroy {
  listPost: Post[] = [];
  loading: boolean = true;

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
            this.loading = false;
          },
        });
  }
  ngOnDestroy(): void {
    this.subscriptionListPostByUser?.unsubscribe();
  }
}
