import { CategoryItem } from "../categories/category.types";

export enum CART_ACTION_TYPES {
  ADD_ITEM_TO_CART = "cart/ADD_ITEM_TO_CART",
  DECREMENT_CART_ITEM = "cart/DECREMENT_CART_ITEM",
  DELETE_CART_ITEM = "cart/DELETE_CART_ITEM",
  SET_IS_CART_OPEN = "cart/SET_IS_CART_OPEN",
}

export type CartItem = CategoryItem & {
  quantity: number;
};
