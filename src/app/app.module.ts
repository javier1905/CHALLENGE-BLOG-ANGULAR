import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlbumsModule } from './albums/albums.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { PostsModule } from './posts/posts.module';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
