import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrixComponent } from './edit-prix.component';

describe('EditPrixComponent', () => {
  let component: EditPrixComponent;
  let fixture: ComponentFixture<EditPrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
