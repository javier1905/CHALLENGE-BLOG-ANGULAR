import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlbumsModule } from './albums/albums.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { PostsModule } from './posts/posts.module';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    PostsModule,
    AlbumsModule,
    TodosModule,
    HeaderModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
