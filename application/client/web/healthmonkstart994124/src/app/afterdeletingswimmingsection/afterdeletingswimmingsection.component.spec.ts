import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterdeletingswimmingsectionComponent } from './afterdeletingswimmingsection.component';

describe('AfterdeletingswimmingsectionComponent', () => {
  let component: AfterdeletingswimmingsectionComponent;
  let fixture: ComponentFixture<AfterdeletingswimmingsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterdeletingswimmingsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterdeletingswimmingsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});