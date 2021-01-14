import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageursComponent } from './voyageurs.component';

describe('VoyageursComponent', () => {
  let component: VoyageursComponent;
  let fixture: ComponentFixture<VoyageursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoyageursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyageursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
