import { AsideService } from './../../services/aside.service';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import {
  TuiButtonModule,
  TuiIconModule,
  TuiNavigationModule,
} from '@taiga-ui/experimental';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [TuiNavigationModule, TuiIconModule, TuiButtonModule],
  providers: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class AsideComponent {
  public asideService: AsideService = inject(AsideService);

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

  // public get getAsideService() {
  //   return this.asideService;
  // }

  // public get getOpen() {
  //   return this.$asideOpen;
  // }

  // public get getExpanded() {
  //   return this.$asideExpanded;
  // }
  // public get getSubmenu() {
  //   return this.$asideSubmenu;
  // }

  // public set setOpen(v: Signal<boolean>) {
  //   this.$asideOpen = computed(v);
  // }

  // public set setExpanded(v: Signal<boolean>) {
  //   this.$asideExpanded = computed(v);
  // }
  // public set setSubmenu(v: Signal<boolean>) {
  //   this.$asideSubmenu = computed(v);
  // }
}
