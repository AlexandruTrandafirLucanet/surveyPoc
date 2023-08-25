import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { Field } from 'src/app/services/data.service';
import { ControlContainer, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-generator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgForOf],
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {
  private rootFormGroup: ControlContainer = inject(ControlContainer);

  @Input({required: true}) children: Field[] = [];

  public form!: FormGroup;

  ngOnInit(): void {
    this.form = this.rootFormGroup.control as FormGroup;
  }
}
