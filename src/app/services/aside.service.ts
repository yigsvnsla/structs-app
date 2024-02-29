import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AsideService {
  public $open!: WritableSignal<boolean>;
  public $expanded!: WritableSignal<boolean>;
  public $submenu!: WritableSignal<boolean>;

  constructor() {
    this.$open = signal<boolean>(false);
    this.$expanded = signal<boolean>(false);
    this.$submenu = signal<boolean>(false);
  }

  public toogleOpenSide(): void {
    this.$expanded.update((state) => !state);
  }
}
