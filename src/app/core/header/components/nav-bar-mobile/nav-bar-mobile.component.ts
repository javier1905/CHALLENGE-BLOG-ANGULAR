import { Component, OnInit, Inject } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-nav-bar-mobile',
  templateUrl: './nav-bar-mobile.component.html',
  styleUrls: ['./nav-bar-mobile.component.css'],
})
export class NavBarMobileComponent implements OnInit {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { message: String[] },
    private _bottomSheetRef: MatBottomSheetRef<NavBarMobileComponent>
  ) {}

  openLink(event: Event): void {
    this._bottomSheetRef.dismiss();

    event.preventDefault();
  }

  ngOnInit(): void {
    console.log(this.data.message);
  }
}
