import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPdfComponent } from './todo-pdf.component';

describe('TodoPdfComponent', () => {
  let component: TodoPdfComponent;
  let fixture: ComponentFixture<TodoPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
