import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutswimmingdetailsComponent } from './workoutswimmingdetails.component';

describe('WorkoutswimmingdetailsComponent', () => {
  let component: WorkoutswimmingdetailsComponent;
  let fixture: ComponentFixture<WorkoutswimmingdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutswimmingdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutswimmingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});