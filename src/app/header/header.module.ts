import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderRoutingModule } from './header-routing.module';
import { NavBarMobileComponent } from './components/nav-bar-mobile/nav-bar-mobile.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { ButtonMenuMobileComponent } from './components/button-menu-mobile/button-menu-mobile.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { NavBarDesktopComponent } from './components/nav-bar-desktop/nav-bar-desktop.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    NavBarMobileComponent,
    ButtonMenuMobileComponent,
    NavBarDesktopComponent,
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    MatBottomSheetModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [HeaderComponent],
  providers: [
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
  ],
})
export class HeaderModule {}
