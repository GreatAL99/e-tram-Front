import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderVComponent } from './header-v.component';

describe('HeaderVComponent', () => {
  let component: HeaderVComponent;
  let fixture: ComponentFixture<HeaderVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
