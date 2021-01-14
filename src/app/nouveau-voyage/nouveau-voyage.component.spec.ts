import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauVoyageComponent } from './nouveau-voyage.component';

describe('NouveauVoyageComponent', () => {
  let component: NouveauVoyageComponent;
  let fixture: ComponentFixture<NouveauVoyageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauVoyageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
