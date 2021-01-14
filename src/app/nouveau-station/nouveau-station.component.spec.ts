import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauStationComponent } from './nouveau-station.component';

describe('NouveauStationComponent', () => {
  let component: NouveauStationComponent;
  let fixture: ComponentFixture<NouveauStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
