import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  TuiDataListModule,
  TuiExpandModule,
  TuiHostedDropdownModule,
} from '@taiga-ui/core';
import { TuiButtonModule, TuiIconModule } from '@taiga-ui/experimental';

@Component({
  selector: 'app-aside-item',
  standalone: true,
  imports: [
    TuiHostedDropdownModule,
    TuiExpandModule,
    TuiDataListModule,
    TuiIconModule,
    TuiButtonModule,
  ],
  templateUrl: './aside-item-component.html',
  styleUrl: './aside-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideItemComponent {
  @Input()
  public isExpanded: boolean = false;

  @Input()
  public subMenuIsExpanded: boolean = false;

  @Input()
  public dropDownIsExpanded: boolean = false;

  @Input()
  public title: string = '';
}
