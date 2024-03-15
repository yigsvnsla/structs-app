import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiLetModule } from '@taiga-ui/cdk';
import { TuiTagModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-structs-table',
  standalone: true,
  imports: [TuiTableModule, TuiTagModule, TuiLetModule],
  templateUrl: './structs-table.component.html',
  styleUrl: './structs-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StructsTableComponent {
  users = [
    {
        name: 'Michael Palin',
        email: 'm.palin@montypython.com',
        status: 'alive',
        tags: ['Funny'],
    },
    {
        name: 'Eric Idle',
        email: 'e.idle@montypython.com',
        status: 'alive',
        tags: ['Funny', 'Music'],
    },
    {
        name: 'John Cleese',
        email: 'j.cleese@montypython.com',
        status: 'alive',
        tags: ['Funny', 'Tall', 'Actor'],
    },
    {
        name: 'Terry Jones',
        email: '',
        status: 'deceased',
        tags: ['Funny', 'Director'],
    },
    {
        name: 'Terry Gilliam',
        email: 't.gilliam@montypython.com',
        status: 'alive',
        tags: ['Funny', 'Director'],
    },
    {
        name: 'Graham Chapman',
        email: '',
        status: 'deceased',
        tags: ['Funny', 'King Arthur'],
    },
];

  readonly columns = ['name', 'email', 'status', 'tags'];
}
