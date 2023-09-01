import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { Field } from 'src/app/services/data.service';
import { ControlContainer, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { BuildTableComponent } from "../build-table/build-table.component";

@Component({
    selector: 'app-form-generator',
    standalone: true,
    templateUrl: './form-generator.component.html',
    styleUrls: ['./form-generator.component.scss'],
    imports: [CommonModule, ReactiveFormsModule, NgForOf, BuildTableComponent]
})
export class FormGeneratorComponent implements OnInit {
  private rootFormGroup: ControlContainer = inject(ControlContainer);

  @Input({required: true}) children: Field[] = [];

  public form!: FormGroup;

  ngOnInit(): void {
    this.form = this.rootFormGroup.control as FormGroup;
  }

  public fieldIsTable(field: Field): boolean {
    if (
      this.stringEndsWith(field.id, 'Abstract') && this.stringEndsWith(field.children[0].id, 'Table') ||
      this.stringEndsWith(field.id, 'Table')
      ) {
      return true;
    }

    return false;
  }

  private stringEndsWith(str: string, suffix: string): boolean {
    return str.endsWith(suffix);
  }
}
