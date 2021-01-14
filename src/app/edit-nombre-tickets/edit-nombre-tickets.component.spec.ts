import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNombreTicketsComponent } from './edit-nombre-tickets.component';

describe('EditNombreTicketsComponent', () => {
  let component: EditNombreTicketsComponent;
  let fixture: ComponentFixture<EditNombreTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNombreTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNombreTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
