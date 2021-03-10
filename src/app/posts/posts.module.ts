import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './pages/posts/posts.component';
import { ListPostComponent } from './components/list-post/list-post.component';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PostsComponent, ListPostComponent],
  imports: [CommonModule, PostsRoutingModule, HttpClientModule],
  providers: [PostService],
})
export class PostsModule {}
