import { RouterOutlet } from '@angular/router';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {
  TuiBadgeModule,
  TuiIconModule,
  TuiNavigationModule,
} from '@taiga-ui/experimental';
import { TuiTabsModule } from '@taiga-ui/kit';
import { TuiRepeatTimesModule } from '@taiga-ui/cdk';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    TuiBadgeModule,
    TuiTabsModule,
    TuiIconModule,
    TuiRepeatTimesModule,
    TuiNavigationModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class MainComponent {}
