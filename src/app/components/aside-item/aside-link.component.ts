import { TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  TuiAppearanceModule,
  TuiButtonModule,
  TuiIconModule,
} from '@taiga-ui/experimental';

@Component({
  selector: 'app-aside-link',
  standalone: true,
  imports: [
    TitleCasePipe,
    RouterLink,
    TuiIconModule,
    TuiButtonModule,
    TuiAppearanceModule,
  ],
  template: `<a
    tuiButton
    RouterLinkActive="link-active"
    tuiAppearance="flat"
    [id]="this.id"
    [iconLeft]="this.iconLeft"
    [iconRight]="this.iconRight"
    [routerLink]="this.pathLink"
  >
    <ng-content></ng-content>
  </a>`,
})
export class AsideLinkComponent {
  @Input()
  public title: string = '';

  @Input()
  public id: string | number = '';

  @Input()
  public iconLeft: string = '';

  @Input()
  public iconRight: string = '';

  @Input()
  public pathLink: string = '';
}
