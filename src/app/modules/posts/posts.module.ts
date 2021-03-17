import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './pages/posts/posts.component';
import { ListPostComponent } from './components/list-post/list-post.component';
import { PostComponent } from './pages/post/post.component';
import { PostTemplateComponent } from './components/post-template/post-template.component';
import { ListCommentComponent } from './components/list-comment/list-comment.component';
import { CommentTemplateComponent } from './components/comment-template/comment-template.component';
import { FilterListPostPipe } from 'src/app/shared/pipes/filter-list-post.pipe';

import { MaterialModule } from '../../core/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

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
  ],
  imports: [
    PostsRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    SharedModule,
  ],
  providers: [PostService, CommentService],
})
export class PostsModule {}
