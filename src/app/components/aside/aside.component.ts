import { AsideService } from './../../services/aside.service';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import {
  TuiButtonModule,
  TuiIconModule,
  TuiNavigationModule,
} from '@taiga-ui/experimental';
import { AsideItemComponent } from '../aside-item/aside-item.component';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [
    TuiNavigationModule,
    TuiIconModule,
    TuiButtonModule,
    AsideItemComponent,
  ],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class AsideComponent {
  public asideService: AsideService = inject(AsideService);

  public get getFooterIconOpenState(): string {
    return this.asideService.$expanded()
      ? 'tuiIconChevronLeft'
      : 'tuiIconChevronRight';
  }

  protected routes: any = [
    {
      title: 'item 2',
      path: 'home',
      iconLeft: 'tuiIconUsers',
      type: 'link',
      children: [
        {
          title: 'item 3',
          path: 'home',
          iconLeft: 'tuiIconHeart',
          type: 'link',
        },
        {
          title: 'item 1',
          path: 'home',
          iconLeft: 'tuiIconSettings',
          type: 'link',
        },
      ],
    },
    {
      title: 'item 3',
      path: 'home',
      iconLeft: 'tuiIconHeart',
      type: 'link',
    },
    {
      title: 'item 1',
      path: 'home',
      iconLeft: 'tuiIconSettings',
      type: 'link',
    },
    {
      type: 'separator',
    },

    {
      title: 'item 4',
      path: 'home',
      iconLeft: 'tuiIconPlus',
      type: 'link',
    },
  ];
}
