import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../models/photo.model';

@Pipe({
  name: 'filterDeletedPhotos',
})
export class FilterDeletedPhotosPipe implements PipeTransform {
  transform(value: Photo[], ...args: unknown[]): Photo[] {
    let photos = localStorage.getItem('deletedPhotos');
    if (!photos) return value;
    else {
      let photosArray = photos.split(',');
      let newArray: Photo[] = value;

      photosArray.forEach((deletedPhotoId) => {
        newArray = newArray?.filter(
          (pho) => pho.id.toString() !== deletedPhotoId
        );
      });
      return newArray;
    }
  }
}
