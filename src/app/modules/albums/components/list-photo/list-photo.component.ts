import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { DialogAceptCancelComponent } from '../dialog-acept-cancel/dialog-acept-cancel.component';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Subscription } from 'rxjs';
import { Photo } from 'src/app/shared/models/photo.model';
import { ModalService } from 'src/app/core/services/modal.service';
import { AlbumService } from 'src/app/core/services/album.service';
import { SnackBarComponent } from 'src/app/shared/components/snack-bar/snack-bar.component';

@Component({
  selector: 'app-list-photo',
  templateUrl: './list-photo.component.html',
  styleUrls: ['./list-photo.component.css'],
})
export class ListPhotoComponent implements OnInit, OnDestroy {
  @Input('listPhoto') listPhoto!: Photo[];
  @Output() showLoading = new EventEmitter();
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
    this._snackBar.openFromComponent(SnackBarComponent, {
      data: 'Photo deleted successfully',
    });
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
              this.showLoading.emit('');
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
