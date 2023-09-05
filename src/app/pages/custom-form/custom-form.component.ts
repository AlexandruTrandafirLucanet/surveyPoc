import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormGeneratorComponent } from 'src/app/components/form-generator/form-generator.component';
import { Observable, map, take } from 'rxjs';
import { DataService, Item, Field } from 'src/app/services/data.service';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [CommonModule,  ReactiveFormsModule, NgForOf, FormGeneratorComponent],
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent  implements OnInit {
  private dataService: DataService = inject(DataService);
  private fb: FormBuilder = inject(FormBuilder);

  items$: Observable<Item[]> = this.dataService.getData()
    .pipe(
      take(1),
      // map((items: Item[]) => [items[5]])
    );
  items: Item[] = [];
  form: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.parseData();
  }

  parseData() {
    this.items$.subscribe((items: Item[]) => {
      this.items = items;
      this.form = this.createFormGroup(items);
      console.log(this.form);
    });
  }

  createFormGroup(items: Item[]): FormGroup {
    const group: { [key: string]: any } = {};

    for (let item of items) {
      group[item.itemKey] = this.createFormArray(item.children);
    };

    return this.fb.group(group);
  }

  createFormArray(fields: Field[]): FormArray {
    const fieldControls: FormGroup[] = [];
      for (const field of fields) {
        const controlGroup: { [key: string]: any } = {};

        controlGroup[field.id] = this.fb.control(null);
        if (field.children?.length > 0) {
          controlGroup['children'] = this.createFormArray(field.children);
        }
        
        fieldControls.push(this.fb.group(controlGroup));
      };

    return this.fb.array(fieldControls);
  }
}
