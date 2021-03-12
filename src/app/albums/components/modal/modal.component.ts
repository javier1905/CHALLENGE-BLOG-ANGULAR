import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  show: boolean = false;
  suscriptionClose: Subscription | undefined;

  constructor(private useModalService: ModalService) {}

  close(): void {
    const body = document.querySelector('body');
    this.useModalService.close$.emit(false);
    body?.classList.remove('stopScroll');
  }
  stopPropagation(e: Event): void {
    e.stopPropagation();
  }

  ngOnInit(): void {
    this.suscriptionClose = this.useModalService.close$.subscribe(
      (show: boolean) => {
        this.show = show;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.suscriptionClose) this.suscriptionClose.unsubscribe();
  }
}
