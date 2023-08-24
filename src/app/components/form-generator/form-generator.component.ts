import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Field } from 'src/app/services/data.service';

@Component({
  selector: 'app-form-generator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent {
  @Input() children: Field[] = [];
}
