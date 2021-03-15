import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTemplateComponent } from './todo-template.component';

describe('TodoTemplateComponent', () => {
  let component: TodoTemplateComponent;
  let fixture: ComponentFixture<TodoTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
