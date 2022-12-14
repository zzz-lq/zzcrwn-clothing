import { CategoryItem } from "../categories/category.type";

export enum CART_ACTION_TYPES {
  SET_OPEN = "cart/SET_OPEN",
  SET_CAERITEMS = 'cart/SET_CAERITEMS',

}

export type CartItem = CategoryItem & {
  quantity: number,
}