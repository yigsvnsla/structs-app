import { AsideService } from './../../services/aside.service';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  WritableSignal,
  computed,
  inject,
} from '@angular/core';
import {
  TuiDataListModule,
  TuiDropdownModule,
  TuiExpandModule,
  TuiHostedDropdownModule,
} from '@taiga-ui/core';
import {
  TuiAppearanceModule,
  TuiButtonModule,
  TuiIconModule,
  TuiNavigationModule,
} from '@taiga-ui/experimental';
import { TuiAccordionModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [
    TuiNavigationModule,
    TuiHostedDropdownModule,
    TuiExpandModule,
    TuiDataListModule,
    TuiAppearanceModule,
    TuiIconModule,
    TuiButtonModule,
    TuiDropdownModule,
    TuiAccordionModule,
  ],
  providers: [AsideService],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideComponent {
  private asideService: AsideService = inject(AsideService);

  // public $tuiNavigationAside!: Signal<boolean>;
  // public $hostedDropdownSettingCanOpen!: Signal<boolean>; //!
  // public $hostedDropdownSettingOpen!: Signal<boolean>;

  private $asideOpen!: Signal<boolean>;
  private $asideExpanded!: Signal<boolean>;
  private $asideSubmenu!: Signal<boolean>;

  constructor() {
    // this.setOpen = this.asideService.getOpen;
    // this.setExpanded = this.asideService.getExpanded;
    // this.setSubmenu = this.asideService.getSubmenu;
  }

  public get getAsideService() {
    return this.asideService;
  }

  public get getOpen() {
    return this.$asideOpen;
  }

  public get getExpanded() {
    return this.$asideExpanded;
  }
  public get getSubmenu() {
    return this.$asideSubmenu;
  }

  public set setOpen(v: Signal<boolean>) {
    this.$asideOpen = computed(v);
  }

  public set setExpanded(v: Signal<boolean>) {
    this.$asideExpanded = computed(v);
  }
  public set setSubmenu(v: Signal<boolean>) {
    this.$asideSubmenu = computed(v);
  }
}
