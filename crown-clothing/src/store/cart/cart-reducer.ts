import {
  addItemToCart,
  addCartItem,
  decrementCartItem,
  decrementItemQuantity,
  deleteCartItem,
  deleteItemFromCart,
  setIsCartOpen,
} from "./cart-actions";
import { AnyAction } from "redux";
import { CartItem } from "./cart.types";

export type CartState = {
  cartItems: CartItem[];
  totalQuantity: number;
  totalPrice: number;
  isCartOpen: boolean;
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

  return state;
};
