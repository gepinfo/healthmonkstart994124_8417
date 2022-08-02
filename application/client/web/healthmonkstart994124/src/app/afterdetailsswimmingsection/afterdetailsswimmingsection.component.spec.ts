import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterdetailsswimmingsectionComponent } from './afterdetailsswimmingsection.component';

describe('AfterdetailsswimmingsectionComponent', () => {
  let component: AfterdetailsswimmingsectionComponent;
  let fixture: ComponentFixture<AfterdetailsswimmingsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterdetailsswimmingsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterdetailsswimmingsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});