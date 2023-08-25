import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyjsComponent } from './surveyjs.component';

describe('SurveyjsComponent', () => {
  let component: SurveyjsComponent;
  let fixture: ComponentFixture<SurveyjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SurveyjsComponent]
    });
    fixture = TestBed.createComponent(SurveyjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
