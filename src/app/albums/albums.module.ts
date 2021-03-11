import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsDashBoardComponent } from './pages/albums-dashboard/albums-dashboard.component';
import { AlbumService } from './services/album.service';
import { ListAlbumComponent } from './components/list-album/list-album.component';
import { UsersService } from '../users/services/users.service';
import { AlbumTemplateComponent } from './components/album-template/album-template.component';
import { AlbumDashboardComponent } from './pages/album-dashboard/album-dashboard.component';
import { GalleryDashboardComponent } from './pages/gallery-dashboard/gallery-dashboard.component';
import { ListPhotoComponent } from './components/list-photo/list-photo.component';
import {
  LazyLoadImageModule,
  LAZYLOAD_IMAGE_HOOKS,
  ScrollHooks,
} from 'ng-lazyload-image';

@NgModule({
  declarations: [
    AlbumsDashBoardComponent,
    ListAlbumComponent,
    AlbumTemplateComponent,
    AlbumDashboardComponent,
    GalleryDashboardComponent,
    ListPhotoComponent,
  ],
  imports: [CommonModule, AlbumsRoutingModule, LazyLoadImageModule],
  providers: [
    AlbumService,
    UsersService,
    { provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks },
  ],
})
export class AlbumsModule {}
