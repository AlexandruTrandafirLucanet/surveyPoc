import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Field } from 'src/app/services/data.service';

@Component({
  selector: 'app-build-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './build-table.component.html',
  styleUrls: ['./build-table.component.scss']
})
export class BuildTableComponent {
  @Input({required: true}) children!: Field[];
  @Input() lineItems!: Field;
}
