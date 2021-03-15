import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlbumByUserComponent } from './list-album-by-user.component';

describe('ListAlbumByUserComponent', () => {
  let component: ListAlbumByUserComponent;
  let fixture: ComponentFixture<ListAlbumByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAlbumByUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAlbumByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
