import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderInputComponent } from './render-input.component';

describe('RenderInputComponent', () => {
  let component: RenderInputComponent;
  let fixture: ComponentFixture<RenderInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RenderInputComponent]
    });
    fixture = TestBed.createComponent(RenderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
