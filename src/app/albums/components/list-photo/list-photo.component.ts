import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../../models/photo.model';
import { AlbumService } from '../../services/album.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-list-photo',
  templateUrl: './list-photo.component.html',
  styleUrls: ['./list-photo.component.css'],
})
export class ListPhotoComponent implements OnInit {
  @Input('listPhoto') listPhoto!: Photo[];

  selectedPhoto!: Photo;

  constructor(
    private modalSevice: ModalService,
    private albumService: AlbumService
  ) {}

  handleSelectPhoto(selectedPhoto: Photo): void {
    const body = document.querySelector('body');
    body?.classList.add('stopScroll');

    this.selectedPhoto = selectedPhoto;
    this.modalSevice.close$.emit(true);
  }

  handleDeletePhoto(deletedPhoto: Photo): void {
    this.albumService.deletePhoto(deletedPhoto).subscribe({
      next: (_: Photo) => {
        let photos = localStorage.getItem('deletedPhotos');
        if (!photos)
          localStorage.setItem('deletedPhotos', deletedPhoto.id.toString());
        else {
          let photosArray = photos.split(',');
          photosArray.push(deletedPhoto.id.toString());
          localStorage.setItem('deletedPhotos', photosArray.toString());
        }
        this.albumService.getPhotosByAlbumId(deletedPhoto.albumId);
      },
    });
  }

  ngOnInit(): void {}
}
