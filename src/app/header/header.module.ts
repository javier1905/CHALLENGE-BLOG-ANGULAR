import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderRoutingModule } from './header-routing.module';
import { NavBarMobileComponent } from './components/nav-bar-mobile/nav-bar-mobile.component';
import { ButtonMenuMobileComponent } from './components/button-menu-mobile/button-menu-mobile.component';

import { NavBarDesktopComponent } from './components/nav-bar-desktop/nav-bar-desktop.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    NavBarMobileComponent,
    ButtonMenuMobileComponent,
    NavBarDesktopComponent,
  ],
  imports: [CommonModule, HeaderRoutingModule, MaterialModule],
  exports: [HeaderComponent],
  providers: [],
})
export class HeaderModule {}
