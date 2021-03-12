import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  close$ = new EventEmitter<boolean>();

  constructor() {}
}
