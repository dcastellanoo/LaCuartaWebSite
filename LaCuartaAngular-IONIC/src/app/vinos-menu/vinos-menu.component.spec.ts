import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinosMenuComponent } from './vinos-menu.component';

describe('VinosMenuComponent', () => {
  let component: VinosMenuComponent;
  let fixture: ComponentFixture<VinosMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinosMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinosMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
