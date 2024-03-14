import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form-new-structs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-new-structs.component.html',
  styleUrl: './form-new-structs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormNewStructsComponent {}
