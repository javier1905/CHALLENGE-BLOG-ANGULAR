import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsDashBoardComponent } from './pages/albums-dashboard/albums-dashboard.component';

import { ListAlbumComponent } from './components/list-album/list-album.component';

import { AlbumTemplateComponent } from './components/album-template/album-template.component';
import { AlbumDashboardComponent } from './pages/album-dashboard/album-dashboard.component';
import { GalleryDashboardComponent } from './pages/gallery-dashboard/gallery-dashboard.component';
import { ListPhotoComponent } from './components/list-photo/list-photo.component';
import {
  LazyLoadImageModule,
  LAZYLOAD_IMAGE_HOOKS,
  ScrollHooks,
} from 'ng-lazyload-image';
import { ModalComponent } from './components/modal/modal.component';

import { FilterDeletedPhotosPipe } from '../../shared/pipes/filter-deleted-photos.pipe';
import { MaterialModule } from '../../core/material/material.module';
import { DialogAceptCancelComponent } from './components/dialog-acept-cancel/dialog-acept-cancel.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { AlbumService } from 'src/app/core/services/album.service';
import { UsersService } from 'src/app/core/services/users.service';
import { ModalService } from 'src/app/core/services/modal.service';

@NgModule({
  declarations: [
    AlbumsDashBoardComponent,
    ListAlbumComponent,
    AlbumTemplateComponent,
    AlbumDashboardComponent,
    GalleryDashboardComponent,
    ListPhotoComponent,
    ModalComponent,
    FilterDeletedPhotosPipe,
    DialogAceptCancelComponent,
    SnackBarComponent,
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    LazyLoadImageModule,
    MaterialModule,
  ],
  providers: [
    AlbumService,
    UsersService,
    ModalService,
    { provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks },
  ],
})
export class AlbumsModule {}
