import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

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
        console.log(listPost);
      },
    });
  }
}
