import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDashboardComponent } from './pages/album-dashboard/album-dashboard.component';
import { AlbumsDashBoardComponent } from './pages/albums-dashboard/albums-dashboard.component';
import { GalleryDashboardComponent } from './pages/gallery-dashboard/gallery-dashboard.component';

const routes: Routes = [
  {
    path: 'albums',
    children: [
      {
        path: 'list',
        component: AlbumsDashBoardComponent,
      },
      {
        path: ':id',
        component: AlbumDashboardComponent,
      },
      {
        path: ':id/gallery',
        component: GalleryDashboardComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumsRoutingModule {}
