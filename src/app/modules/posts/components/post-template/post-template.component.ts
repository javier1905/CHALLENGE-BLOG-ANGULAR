import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-post-template',
  templateUrl: './post-template.component.html',
  styleUrls: ['./post-template.component.css'],
})
export class PostTemplateComponent implements OnInit {
  @Input('post') post!: Post;

  constructor(private router: Router) {}
  goToUserDetail(): void {
    this.router.navigate(['users', this.post.userId]);
  }

  ngOnInit(): void {}
}
