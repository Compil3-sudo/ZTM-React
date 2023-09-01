import {
  addItemToCart,
  addCartItem,
  decrementCartItem,
  decrementItemQuantity,
  deleteCartItem,
  deleteItemFromCart,
  setIsCartOpen,
  clearCartItems,
  clearCart,
} from "./cart-actions";
import { AnyAction } from "redux";
import { CartItem } from "./cart.types";

export type CartState = {
  readonly cartItems: CartItem[];
  readonly totalQuantity: number;
  readonly totalPrice: number;
  readonly isCartOpen: boolean;
};

export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (addItemToCart.match(action)) {
    return addCartItem(state, action.payload);
  }

  if (decrementItemQuantity.match(action)) {
    return decrementCartItem(state, action.payload);
  }

  if (deleteItemFromCart.match(action)) {
    return deleteCartItem(state, action.payload);
  }

  if (clearCartItems.match(action)) {
    return clearCart();
  }

  return state;
};
