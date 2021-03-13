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
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

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
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatTooltipModule,
  ],
  providers: [PostService, CommentService],
})
export class PostsModule {}
