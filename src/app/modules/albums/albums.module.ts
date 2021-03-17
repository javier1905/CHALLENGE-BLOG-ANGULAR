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

import { DialogAceptCancelComponent } from './components/dialog-acept-cancel/dialog-acept-cancel.component';

import { AlbumService } from 'src/app/core/services/album.service';
import { UsersService } from 'src/app/core/services/users.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { MaterialModule } from 'src/app/core/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

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
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    LazyLoadImageModule,
    MaterialModule,
    SharedModule,
  ],
  providers: [
    AlbumService,
    UsersService,
    ModalService,
    { provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks },
  ],
})
export class AlbumsModule {}
