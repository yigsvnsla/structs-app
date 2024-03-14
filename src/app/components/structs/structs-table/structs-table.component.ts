import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-structs-table',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl:"./structs-table.component.html",
  styleUrl: './structs-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StructsTableComponent { }
