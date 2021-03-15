import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsDashBoardComponent } from './albums-dashboard.component';

describe('AlbumsComponent', () => {
  let component: AlbumsDashBoardComponent;
  let fixture: ComponentFixture<AlbumsDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumsDashBoardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
