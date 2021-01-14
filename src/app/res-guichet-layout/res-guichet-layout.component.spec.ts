import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResGuichetLayoutComponent } from './res-guichet-layout.component';

describe('ResGuichetLayoutComponent', () => {
  let component: ResGuichetLayoutComponent;
  let fixture: ComponentFixture<ResGuichetLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResGuichetLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResGuichetLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
