import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-desktop',
  templateUrl: './nav-bar-desktop.component.html',
  styleUrls: ['./nav-bar-desktop.component.css'],
})
export class NavBarDesktopComponent implements OnInit {
  constructor(private router: Router) {}

  handleGoingTo(route: String): void {
    this.router.navigate([route]);
  }

  ngOnInit(): void {}
}
