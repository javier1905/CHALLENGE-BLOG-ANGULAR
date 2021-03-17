import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';
import { Post } from 'src/app/shared/models/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit, OnDestroy {
  listPost: Post[] = [];
  loading: boolean = true;
  subscriptionListoPost: Subscription | undefined;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.refreshList();
    this.subscriptionListoPost = this.postService.getList.subscribe({
      next: (listPost: Post[]) => {
        this.listPost = listPost;
        this.loading = false;
      },
    });
  }

  ngOnDestroy(): void {
    this.subscriptionListoPost?.unsubscribe();
  }
}
