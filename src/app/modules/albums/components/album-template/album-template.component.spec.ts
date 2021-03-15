import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumTemplateComponent } from './album-template.component';

describe('AlbumTemplateComponent', () => {
  let component: AlbumTemplateComponent;
  let fixture: ComponentFixture<AlbumTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
