import { Component, OnInit } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataService, Field, Item } from './services/data.service';
import { inject } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, map, take } from 'rxjs';
import { FormGeneratorComponent } from "./components/form-generator/form-generator.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, ReactiveFormsModule, NgForOf, FormGeneratorComponent]
})
export class AppComponent implements OnInit {
  private dataService: DataService = inject(DataService);
  private fb: FormBuilder = inject(FormBuilder);

  items$: Observable<Item[]> = this.dataService.getData()
    .pipe(
      take(1),
      // map((items: Item[]) => [items[0]])
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
