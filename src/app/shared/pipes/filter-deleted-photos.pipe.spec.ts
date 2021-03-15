import { FilterDeletedPhotosPipe } from './filter-deleted-photos.pipe';

describe('FilterDeletedPhotosPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterDeletedPhotosPipe();
    expect(pipe).toBeTruthy();
  });
});
