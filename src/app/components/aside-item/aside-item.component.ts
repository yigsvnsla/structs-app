import { TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
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
import { AsideLinkComponent } from './aside-link.component';

@Component({
  selector: 'app-aside-item',
  standalone: true,
  imports: [
    TuiHostedDropdownModule,
    TuiExpandModule,
    TuiDataListModule,
    TuiIconModule,
    TuiButtonModule,
    TuiAppearanceModule,
    TuiDropdownModule,
    TitleCasePipe,
    TuiNavigationModule,

    AsideLinkComponent,
  ],
  templateUrl: './aside-item-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class AsideItemComponent {
  protected dropDownIsOpen = false;
  protected submenuIsOpen = false;

  @Input()
  public asideIsOpen: boolean = false;

  @Input()
  public id: string | number = '';

  @Input()
  public title: string = '';

  @Input()
  public iconLeft: string = '';

  @Input()
  public iconRight: string = 'tuiIconChevronDown';

  @Input()
  public children = [];

  @Input()
  public pathLink: string = '';

  public get tuiAppearanceState(): TuiInteractiveStateT | null {
    return this.dropDownIsOpen ? TuiInteractiveState.Hover : null;
  }

  public toggleDropdownOpen() {
    this.submenuIsOpen = this.asideIsOpen && !this.submenuIsOpen;
  }
}
