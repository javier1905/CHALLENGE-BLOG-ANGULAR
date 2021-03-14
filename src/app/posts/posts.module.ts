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
import { FilterListPostPipe } from './pipes/filter-list-post.pipe';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    PostsComponent,
    ListPostComponent,
    PostComponent,
    PostTemplateComponent,
    ListCommentComponent,
    CommentTemplateComponent,
    FilterListPostPipe,
    FilterListPostPipe,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [PostService, CommentService],
})
export class PostsModule {}
