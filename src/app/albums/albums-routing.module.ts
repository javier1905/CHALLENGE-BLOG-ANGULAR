import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './pages/albums/albums.component';

const routes: Routes = [
  {
    path: 'albums',
    children: [
      {
        path: 'list',
        component: AlbumsComponent,
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
