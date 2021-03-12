import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-button-menu-mobile',
  templateUrl: './button-menu-mobile.component.html',
  styleUrls: ['./button-menu-mobile.component.css'],
})
export class ButtonMenuMobileComponent implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(ButtonMenuMobileComponent);
  }

  ngOnInit(): void {}
}
