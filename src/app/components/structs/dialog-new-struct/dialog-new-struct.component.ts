import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dialog-new-struct',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>dialog-new-struct works!</p>`,
  styleUrl: './dialog-new-struct.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogNewStructComponent { }
