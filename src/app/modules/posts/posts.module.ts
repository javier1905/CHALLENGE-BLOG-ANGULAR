import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './pages/posts/posts.component';
import { ListPostComponent } from './components/list-post/list-post.component';

import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './pages/post/post.component';
import { PostTemplateComponent } from './components/post-template/post-template.component';
import { ListCommentComponent } from './components/list-comment/list-comment.component';

import { CommentTemplateComponent } from './components/comment-template/comment-template.component';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../core/material/material.module';
import { FilterListPostPipe } from 'src/app/shared/pipes/filter-list-post.pipe';
import { PostService } from 'src/app/core/services/post.service';
import { CommentService } from 'src/app/core/services/comment.service';

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
