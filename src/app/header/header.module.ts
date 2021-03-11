import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderRoutingModule } from './header-routing.module';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent],
  imports: [CommonModule, HeaderRoutingModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
