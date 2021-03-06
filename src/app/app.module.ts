import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlbumsModule } from './modules/albums/albums.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './core/header/header.module';
import { PostsModule } from './modules/posts/posts.module';
import { TodosModule } from './modules/todos/todos.module';
import { UsersModule } from './modules/users/users.module';
import { FooterModule } from './core/footer/footer.module';
import { AppRoutingModule } from './app-routing.module';

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
    FooterModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
