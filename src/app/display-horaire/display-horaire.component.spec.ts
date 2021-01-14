import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHoraireComponent } from './display-horaire.component';

describe('DisplayHoraireComponent', () => {
  let component: DisplayHoraireComponent;
  let fixture: ComponentFixture<DisplayHoraireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayHoraireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayHoraireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
