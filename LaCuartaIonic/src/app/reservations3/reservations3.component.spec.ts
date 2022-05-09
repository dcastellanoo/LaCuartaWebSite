import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reservations3Component } from './reservations3.component';

describe('Reservations3Component', () => {
  let component: Reservations3Component;
  let fixture: ComponentFixture<Reservations3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reservations3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reservations3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
