import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsablesGComponent } from './responsables-g.component';

describe('ResponsablesGComponent', () => {
  let component: ResponsablesGComponent;
  let fixture: ComponentFixture<ResponsablesGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsablesGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsablesGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
