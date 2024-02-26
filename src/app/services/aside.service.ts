import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AsideService {
  private $open!: Signal<boolean>;
  private $expanded!: Signal<boolean>;
  private $submenu!: Signal<boolean>;

  constructor() {
    this.setOpen = false;
    this.setExpanded = false;
    this.setSubmenu = false;
  }

  public get getOpen() {
    return this.$open;
  }

  public get getExpanded() {
    return this.$expanded;
  }
  public get getSubmenu() {
    return this.$submenu;
  }

  public set setOpen(v: boolean) {
    this.$open = signal(v);
  }

  public set setExpanded(v: boolean) {
    this.$expanded = signal(v);
  }
  public set setSubmenu(v: boolean) {
    this.$submenu = signal(v);
  }
}
