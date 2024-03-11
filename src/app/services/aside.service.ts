import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AsideService {
  public $expanded: WritableSignal<boolean> = signal(false);

  public toogleOpenSide(): void {
    this.$expanded.update((state) => !state);
  }
}
