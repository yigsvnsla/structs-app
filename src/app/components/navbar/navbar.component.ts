import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  TuiButtonModule,
  TuiIconModule,
  TuiNavigationModule,
  TuiBadgeModule,
} from '@taiga-ui/experimental';
import { TuiTabsModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    TuiNavigationModule,
    TuiIconModule,
    TuiTabsModule,
    TuiBadgeModule,
    TuiButtonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {}
