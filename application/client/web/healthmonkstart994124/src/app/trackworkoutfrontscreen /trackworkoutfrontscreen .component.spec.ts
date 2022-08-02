import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trackworkoutfrontscreen Component } from './trackworkoutfrontscreen .component';

describe('Trackworkoutfrontscreen Component', () => {
  let component: Trackworkoutfrontscreen Component;
  let fixture: ComponentFixture<Trackworkoutfrontscreen Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trackworkoutfrontscreen Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trackworkoutfrontscreen Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});