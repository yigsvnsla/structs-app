
export interface AsideItemBase {
  title: string;
  icon: string;
  path: string;
  children: AsideItemTypeItem[] |  AsideItemTypeDivider[]
}

export enum ASIDE_ITEM_TYPE {
  ITEM,
  DIVIDER,
  SUBMENU,
}

export interface AsideItemType<T extends ASIDE_ITEM_TYPE> {
  type: T;
}

export type AsideItemTypeItem =   (AsideItemType<ASIDE_ITEM_TYPE.ITEM> & Partial<AsideItemBase>)
export type AsideItemTypeSubmenu = (AsideItemType<ASIDE_ITEM_TYPE.SUBMENU> & AsideItemBase )
export type AsideItemTypeDivider = (AsideItemType<ASIDE_ITEM_TYPE.DIVIDER> & Partial<AsideItemBase>)
export type AsideItem = AsideItemTypeItem |  AsideItemTypeDivider | AsideItemTypeSubmenu

