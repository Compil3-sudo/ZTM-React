import {
  CART_ACTION_TYPES,
  addCartItem,
  decrementCartItem,
  deleteCartItem,
} from "./cart-actions";

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    // returns new cart state
    case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
      return addCartItem(state, payload);

    case CART_ACTION_TYPES.DECREMENT_CART_ITEM:
      return decrementCartItem(state, payload);

    case CART_ACTION_TYPES.DELETE_CART_ITEM:
      return deleteCartItem(state, payload);

    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      return state;
  }
};
