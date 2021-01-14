import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauHoraireComponent } from './nouveau-horaire.component';

describe('NouveauHoraireComponent', () => {
  let component: NouveauHoraireComponent;
  let fixture: ComponentFixture<NouveauHoraireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauHoraireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauHoraireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
