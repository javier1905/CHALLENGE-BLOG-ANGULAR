import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-user-template',
  templateUrl: './user-template.component.html',
  styleUrls: ['./user-template.component.css'],
})
export class UserTemplateComponent implements OnInit {
  @Input('user') user!: User;

  constructor() {}

  ngOnInit(): void {}
}
