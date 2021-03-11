import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<Album[]>(`${environment.url_api}/albums`);
  }
  getAlbumById(id: String | number) {
    return this.http.get<Album>(`${environment.url_api}/albums/${id}`);
  }
  getPhotosByAlbumId(id: String | number) {
    return this.http.get<Photo[]>(`${environment.url_api}/albums/${id}/photos`);
  }
}
