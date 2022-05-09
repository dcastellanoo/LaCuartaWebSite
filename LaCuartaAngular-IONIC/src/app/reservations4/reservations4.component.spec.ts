import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reservations4Component } from './reservations4.component';

describe('Reservations4Component', () => {
  let component: Reservations4Component;
  let fixture: ComponentFixture<Reservations4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reservations4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reservations4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
