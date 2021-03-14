import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css'],
})
export class ListPostComponent implements OnInit {
  @Input('listPost') listPost!: Post[];

  filterTitle: String = '';
  filterId: Number = 0;

  constructor(private router: Router) {}

  goToThePost(id: Number): void {
    this.router.navigate(['posts', id]);
  }
  ngOnInit(): void {}
}
