import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTodoByUserComponent } from './list-todo-by-user.component';

describe('ListTodoByUserComponent', () => {
  let component: ListTodoByUserComponent;
  let fixture: ComponentFixture<ListTodoByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTodoByUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTodoByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
