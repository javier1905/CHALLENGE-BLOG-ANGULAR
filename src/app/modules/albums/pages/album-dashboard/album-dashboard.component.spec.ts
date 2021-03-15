import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDashboardComponent } from './album-dashboard.component';

describe('AlbumDashboardComponent', () => {
  let component: AlbumDashboardComponent;
  let fixture: ComponentFixture<AlbumDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
