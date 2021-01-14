import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimenterComponent } from './alimenter.component';

describe('AlimenterComponent', () => {
  let component: AlimenterComponent;
  let fixture: ComponentFixture<AlimenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlimenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
