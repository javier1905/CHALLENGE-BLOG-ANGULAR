import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './pages/posts/posts.component';
import { ListPostComponent } from './components/list-post/list-post.component';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './pages/post/post.component';
import { PostTemplateComponent } from './components/post-template/post-template.component';
import { ListCommentComponent } from './components/list-comment/list-comment.component';
import { CommentService } from './services/comment.service';
import { CommentTemplateComponent } from './components/comment-template/comment-template.component';

@NgModule({
  declarations: [
    PostsComponent,
    ListPostComponent,
    PostComponent,
    PostTemplateComponent,
    ListCommentComponent,
    CommentTemplateComponent,
  ],
  imports: [CommonModule, PostsRoutingModule, HttpClientModule],
  providers: [PostService, CommentService],
})
export class PostsModule {}
