import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauTramComponent } from './nouveau-tram.component';

describe('NouveauTramComponent', () => {
  let component: NouveauTramComponent;
  let fixture: ComponentFixture<NouveauTramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauTramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauTramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
