import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reservations2Component } from './reservations2.component';

describe('Reservations2Component', () => {
  let component: Reservations2Component;
  let fixture: ComponentFixture<Reservations2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reservations2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reservations2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
