import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

import { Subject, Subscription } from 'rxjs';
import { Photo } from 'src/app/shared/models/photo.model';
import { Album } from 'src/app/shared/models/album.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private mySuject = new Subject<Photo[]>();
  getListPhotos$ = this.mySuject.asObservable();

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<Album[]>(`${environment.url_api}/albums`);
  }
  getAlbumById(id: String | number) {
    return this.http.get<Album>(`${environment.url_api}/albums/${id}`);
  }
  getPhotosByAlbumId(albumId: String | number) {
    let subscriptionAlbum: Subscription | undefined;
    subscriptionAlbum = this.http
      .get<Photo[]>(`${environment.url_api}/albums/${albumId}/photos`)
      .subscribe({
        next: (photos: Photo[]) => {
          this.mySuject.next(photos);
          subscriptionAlbum?.unsubscribe();
        },
      });
  }
  deletePhoto(deletedPhoto: Photo) {
    return this.http.delete<Photo>(
      `${environment.url_api}/photos/${deletedPhoto.id}`
    );
  }
}
