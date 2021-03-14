import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';
import { Router } from '@angular/router';

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
