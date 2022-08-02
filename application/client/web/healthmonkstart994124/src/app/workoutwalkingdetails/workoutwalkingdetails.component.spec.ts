import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutwalkingdetailsComponent } from './workoutwalkingdetails.component';

describe('WorkoutwalkingdetailsComponent', () => {
  let component: WorkoutwalkingdetailsComponent;
  let fixture: ComponentFixture<WorkoutwalkingdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutwalkingdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutwalkingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});