import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAlbumsDashboardComponent } from './user-albums-dashboard.component';

describe('UserAlbumsDashboardComponent', () => {
  let component: UserAlbumsDashboardComponent;
  let fixture: ComponentFixture<UserAlbumsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAlbumsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAlbumsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
