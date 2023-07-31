import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

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
