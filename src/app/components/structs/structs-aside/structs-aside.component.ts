import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  TuiAppearanceModule,
  TuiButtonModule,
  TuiHeaderModule,
  TuiTitleModule,
} from '@taiga-ui/experimental';

@Component({
  selector: 'app-structs-aside',
  standalone: true,
  imports: [
    TuiHeaderModule,
    TuiButtonModule,
    TuiTitleModule,
    TuiAppearanceModule,
  ],
  templateUrl: './structs-aside.component.html',
  styleUrl: './structs-aside.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StructsAsideComponent {}
