import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  listPost: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.refreshList();
    this.postService.getList.subscribe({
      next: (listPost: Post[]) => {
        this.listPost = listPost;
      },
    });
  }
}
