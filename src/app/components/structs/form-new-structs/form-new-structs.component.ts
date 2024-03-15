import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiHeaderModule } from '@taiga-ui/experimental';

@Component({
  selector: 'app-form-new-structs',
  standalone: true,
  imports: [TuiHeaderModule],
  templateUrl: './form-new-structs.component.html',
  styleUrl: './form-new-structs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormNewStructsComponent {}
