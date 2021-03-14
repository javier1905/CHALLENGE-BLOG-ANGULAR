import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTodosDashboardComponent } from './user-todos-dashboard.component';

describe('UserTodosDashboardComponent', () => {
  let component: UserTodosDashboardComponent;
  let fixture: ComponentFixture<UserTodosDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTodosDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTodosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
