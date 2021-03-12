import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderRoutingModule } from './header-routing.module';
import { NavBarMobileComponent } from './components/nav-bar-mobile/nav-bar-mobile.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { ButtonMenuMobileComponent } from './components/button-menu-mobile/button-menu-mobile.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    NavBarMobileComponent,
    ButtonMenuMobileComponent,
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    MatBottomSheetModule,
    MatListModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
