import { createSelector } from "reselect";
import { CartState } from "./cart-reducer";

const selectCartReducer = (state): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartTotalPrice = createSelector(
  [selectCartReducer],
  (cart) => cart.totalPrice
);

export const selectCartTotalQuantity = createSelector(
  [selectCartReducer],
  (cart) => cart.totalQuantity
);
