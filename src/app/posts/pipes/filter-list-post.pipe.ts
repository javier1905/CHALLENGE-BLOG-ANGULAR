import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post';

@Pipe({
  name: 'filterListPost',
})
export class FilterListPostPipe implements PipeTransform {
  transform(value: Post[], filterTitle: String, filterId: Number): Post[] {
    const r = new RegExp(filterTitle.toString(), 'gi');

    let filterArray = value;
    if (filterId <= 0 || typeof filterId !== 'number') {
      return filterArray.filter((post) => r.test(post.title.toString()));
    } else {
      return (filterArray = filterArray
        .filter((post) => r.test(post.title.toString()))
        .filter((post) => post.userId === filterId));
    }
  }
}
