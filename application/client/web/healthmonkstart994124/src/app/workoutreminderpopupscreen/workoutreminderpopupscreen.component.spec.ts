import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutreminderpopupscreenComponent } from './workoutreminderpopupscreen.component';

describe('WorkoutreminderpopupscreenComponent', () => {
  let component: WorkoutreminderpopupscreenComponent;
  let fixture: ComponentFixture<WorkoutreminderpopupscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutreminderpopupscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutreminderpopupscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});