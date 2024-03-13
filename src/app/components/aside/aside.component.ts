import { AsideService } from './service/aside.service';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import {
  TuiAppearanceModule,
  TuiButtonModule,
  TuiIconModule,
  TuiNavigationModule,
} from '@taiga-ui/experimental';
import { AsideItemComponent } from './aside-item/aside-item.component';
import { AsideItem } from './interface/aside.interface';
import {
  TuiDataListModule,
  TuiDropdownModule,
  TuiHostedDropdownModule,
} from '@taiga-ui/core';

@Component({
  selector: 'app-aside',
  standalone: true,
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  imports: [
    TuiNavigationModule,
    TuiIconModule,
    TuiButtonModule,
    AsideItemComponent,

    TuiHostedDropdownModule,
    TuiDataListModule,
    TuiIconModule,
    TuiButtonModule,
    TuiAppearanceModule,
    TuiDropdownModule,
    TuiNavigationModule,
  ],
})
export class AsideComponent {
  public asideService: AsideService = inject(AsideService);

  protected AsideItems: AsideItem[] = this.asideService.items;

  public get getFooterIconOpenState(): string {
    return this.asideService.asideIsOpen
      ? 'tuiIconChevronLeft'
      : 'tuiIconChevronRight';
  }
}
