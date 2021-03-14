import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Photo } from '../../models/photo.model';
import { AlbumService } from '../../services/album.service';
import { ModalService } from '../../services/modal.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogAceptCancelComponent } from '../dialog-acept-cancel/dialog-acept-cancel.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-photo',
  templateUrl: './list-photo.component.html',
  styleUrls: ['./list-photo.component.css'],
})
export class ListPhotoComponent implements OnInit, OnDestroy {
  @Input('listPhoto') listPhoto!: Photo[];
  subscriptionDialog: Subscription | undefined;
  subscriptionDeletePhoto: Subscription | undefined;

  selectedPhoto!: Photo;

  constructor(
    private modalSevice: ModalService,
    private albumService: AlbumService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogAceptCancelComponent);
    return dialogRef.afterClosed();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, { duration: 2500 });
  }

  handleSelectPhoto(selectedPhoto: Photo): void {
    const body = document.querySelector('body');
    body?.classList.add('stopScroll');

    this.selectedPhoto = selectedPhoto;
    this.modalSevice.close$.emit(true);
  }

  handleDeletePhoto(deletedPhoto: Photo): void {
    this.subscriptionDialog = this.openDialog().subscribe((result) => {
      if (result === true) {
        this.subscriptionDeletePhoto = this.albumService
          .deletePhoto(deletedPhoto)
          .subscribe({
            next: (_: Photo) => {
              let photos = localStorage.getItem('deletedPhotos');
              if (!photos)
                localStorage.setItem(
                  'deletedPhotos',
                  deletedPhoto.id.toString()
                );
              else {
                let photosArray = photos.split(',');
                photosArray.push(deletedPhoto.id.toString());
                localStorage.setItem('deletedPhotos', photosArray.toString());
              }
              this.openSnackBar();
              this.albumService.getPhotosByAlbumId(deletedPhoto.albumId);
              this.subscriptionDeletePhoto?.unsubscribe();
            },
          });
      }
      this.subscriptionDialog?.unsubscribe();
    });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
