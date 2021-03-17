import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { NavBarMobileComponent } from '../nav-bar-mobile/nav-bar-mobile.component';

@Component({
  selector: 'app-button-menu-mobile',
  templateUrl: './button-menu-mobile.component.html',
  styleUrls: ['./button-menu-mobile.component.css'],
})
export class ButtonMenuMobileComponent implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(NavBarMobileComponent, {
      data: {
        message: 'Hola mundo',
      },
    });
  }

  ngOnInit(): void {}
}
