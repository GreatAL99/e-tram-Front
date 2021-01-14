import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRComponent } from './header-r.component';

describe('HeaderRComponent', () => {
  let component: HeaderRComponent;
  let fixture: ComponentFixture<HeaderRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
