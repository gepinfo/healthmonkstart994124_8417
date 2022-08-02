import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentlytrackedworkoutsComponent } from './frequentlytrackedworkouts.component';

describe('FrequentlytrackedworkoutsComponent', () => {
  let component: FrequentlytrackedworkoutsComponent;
  let fixture: ComponentFixture<FrequentlytrackedworkoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequentlytrackedworkoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentlytrackedworkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});