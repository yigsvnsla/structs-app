import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { TuiDataListModule, TuiHostedDropdownModule } from '@taiga-ui/core';
import {
  TuiAppearanceModule,
  TuiAvatarModule,
  TuiBadgeModule,
  TuiBadgeNotificationModule,
  TuiButtonModule,
  TuiIconModule,
  TuiNavigationModule,
} from '@taiga-ui/experimental';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TuiNavigationModule,
    TuiIconModule,
    TuiAvatarModule,
    TuiBadgeNotificationModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiBadgeModule,
    TuiAppearanceModule,
    TuiButtonModule,
  ],
  styleUrl: './header.component.css',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class HeaderComponent {}
