import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPostsDashboardComponent } from './users-posts-dashboard.component';

describe('UsersPostsDashboardComponent', () => {
  let component: UsersPostsDashboardComponent;
  let fixture: ComponentFixture<UsersPostsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersPostsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPostsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
