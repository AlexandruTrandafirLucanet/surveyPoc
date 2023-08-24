import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGeneratorComponent } from './form-generator.component';

describe('FormGeneratorComponent', () => {
  let component: FormGeneratorComponent;
  let fixture: ComponentFixture<FormGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormGeneratorComponent]
    });
    fixture = TestBed.createComponent(FormGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
