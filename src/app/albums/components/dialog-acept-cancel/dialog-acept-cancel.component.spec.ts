import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAceptCancelComponent } from './dialog-acept-cancel.component';

describe('DialogAceptCancelComponent', () => {
  let component: DialogAceptCancelComponent;
  let fixture: ComponentFixture<DialogAceptCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAceptCancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAceptCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
