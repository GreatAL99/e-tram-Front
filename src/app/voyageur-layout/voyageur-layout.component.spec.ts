import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageurLayoutComponent } from './voyageur-layout.component';

describe('VoyageurLayoutComponent', () => {
  let component: VoyageurLayoutComponent;
  let fixture: ComponentFixture<VoyageurLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoyageurLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyageurLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
