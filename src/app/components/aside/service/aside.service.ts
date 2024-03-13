import { Injectable } from '@angular/core';
import { ASIDE_ITEM_TYPE, AsideItem } from '../interface/aside.interface';

@Injectable({ providedIn: 'root' })
export class AsideService {
  public asideIsOpen: boolean = false;

  public items: AsideItem[] = [
    {
      type: ASIDE_ITEM_TYPE.ITEM,
      icon: 'tuiIconHome',
      path: '',
      title: 'home',
    },
    {
      type: ASIDE_ITEM_TYPE.ITEM,
      icon: 'tuiIconGridLarge',
      path: 'structs',
      title: 'structs',
    },
    {
      type: ASIDE_ITEM_TYPE.DIVIDER,
    },
    // {
    //   type: ASIDE_ITEM_TYPE.SUBMENU,
    //   icon: 'tuiIconGridLarge',
    //   path: 'structs',
    //   title: 'structs',
    //   children: [
    //     {
    //       type: ASIDE_ITEM_TYPE.ITEM,
    //       icon: 'tuiIconBox',
    //       path: 'add',
    //       title: 'add',
    //     },
    //     {
    //       type: ASIDE_ITEM_TYPE.ITEM,
    //       icon: 'tuiIconBox',
    //       path: 'add',
    //       title: 'delete',
    //     },
    //   ],
    // },
  ];

  public toogleOpenSide(): void {
    this.asideIsOpen = !this.asideIsOpen;
  }
}
