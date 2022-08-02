import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterdetailswalkingsectionComponent } from './afterdetailswalkingsection.component';

describe('AfterdetailswalkingsectionComponent', () => {
  let component: AfterdetailswalkingsectionComponent;
  let fixture: ComponentFixture<AfterdetailswalkingsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterdetailswalkingsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterdetailswalkingsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});