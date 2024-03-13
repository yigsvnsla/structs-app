import { TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import {
  TuiDataListModule,
  TuiDropdownModule,
  TuiExpandModule,
  TuiHostedDropdownModule,
  TuiInteractiveState,
  TuiInteractiveStateT,
} from '@taiga-ui/core';
import {
  TuiAppearanceModule,
  TuiButtonModule,
  TuiIconModule,
  TuiNavigationModule,
} from '@taiga-ui/experimental';
import { ASIDE_ITEM_TYPE, AsideItem } from '../interface/aside.interface';
import { AsideService } from '../service/aside.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aside-item',
  standalone: true,
  templateUrl:"./aside-item.component.html",
  styleUrl:"./aside-item.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  imports: [
    TuiHostedDropdownModule,
    TuiExpandModule,
    TuiDataListModule,
    TuiIconModule,
    TuiButtonModule,
    TuiAppearanceModule,
    TuiDropdownModule,
    TuiNavigationModule,
    TitleCasePipe,
    TuiIconModule,
    RouterLink,
  ],
})
export class AsideItemComponent {
  protected asideService = inject(AsideService);

  protected dropDownIsOpen = false;
  protected submenuIsOpen = false;


  @Input()
  public title?: string = '';

  @Input()
  public iconLeft?: string = '';

  @Input()
  public iconRight?: string = 'tuiIconChevronDown';

  @Input()
  public children?: AsideItem[] = [];

  @Input()
  public pathLink?: string = '';

  @Input()
  public itemType: ASIDE_ITEM_TYPE = ASIDE_ITEM_TYPE.ITEM;

  public get ASIDE_ITEM_TYPE(): typeof ASIDE_ITEM_TYPE {
    return ASIDE_ITEM_TYPE;
  }

  public get tuiAppearanceState(): TuiInteractiveStateT | null {
    return this.dropDownIsOpen ? TuiInteractiveState.Hover : null;
  }

  public get tuiIconDropdownState(): string {
    return this.dropDownIsOpen ? 'tuiIconChevronUp' : 'tuiIconChevronDown';
  }

  public toggleExpandOpen() {
    this.submenuIsOpen = this.asideService.asideIsOpen && !this.submenuIsOpen;
    this.iconRight = this.submenuIsOpen ? 'tuiIconChevronUp': 'tuiIconChevronDown';
  }
}
