import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidasMenuComponent } from './bebidas-menu.component';

describe('BebidasMenuComponent', () => {
  let component: BebidasMenuComponent;
  let fixture: ComponentFixture<BebidasMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BebidasMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BebidasMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
