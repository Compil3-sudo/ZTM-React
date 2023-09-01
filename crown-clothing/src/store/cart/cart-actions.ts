import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import {
  createAction,
  withMatcher,
  ActionWithPayload,
  Action,
} from "../../utils/reducer/reducer.utils";
import { CART_INITIAL_STATE, CartState } from "./cart-reducer";

export const addCartItem = (
  state: CartState,
  productToAdd: CartItem
): CartState => {
  // find if cartItems contains productToAdd
  const cartItems = state.cartItems;

  const existingProductIndex = cartItems.findIndex(
    (product) => product.id === productToAdd.id
  );

  // if found, increment quantity
  let newCartItems;
  const existingProduct = cartItems[existingProductIndex];

  if (existingProduct) {
    const updatedProduct = {
      ...existingProduct,
      quantity: existingProduct.quantity + 1,
    };

    newCartItems = [...cartItems];
    newCartItems[existingProductIndex] = updatedProduct;
  } else {
    // product not found => new product => add to cart
    const newProduct = { ...productToAdd, quantity: 1 };
    newCartItems = [...cartItems, newProduct];
  }

  // return new array with modified cartItems/ new cart item
  const newTotalQuantity = state.totalQuantity + 1;
  const newTotalPrice = state.totalPrice + productToAdd.price;

  return {
    ...state,
    cartItems: newCartItems,
    totalQuantity: newTotalQuantity,
    totalPrice: newTotalPrice,
  };
};

export const decrementCartItem = (
  state: CartState,
  productToDecrement: CartItem
): CartState => {
  // decrease item quantity, OR remove if quantity === 1
  const cartItems = state.cartItems;

  const productIndex = cartItems.findIndex(
    (product) => product.id === productToDecrement.id
  );

  const newTotalQuantity = state.totalQuantity - 1;
  const newTotalPrice = state.totalPrice - productToDecrement.price;

  // when product.quantity is 1 => 0 after decrement => remove item from cart
  if (productToDecrement.quantity === 1) {
    const updatedCartItems = cartItems.filter(
      (product) => product.id !== productToDecrement.id
    );

    return {
      ...state,
      cartItems: updatedCartItems,
      totalQuantity: newTotalQuantity,
      totalPrice: newTotalPrice,
    };
  }

  const updatedProduct = {
    ...productToDecrement,
    quantity: productToDecrement.quantity - 1,
  };

  const updatedCartItems = [...cartItems];
  updatedCartItems[productIndex] = updatedProduct;

  return {
    ...state,
    cartItems: updatedCartItems,
    totalQuantity: newTotalQuantity,
    totalPrice: newTotalPrice,
  };
};

export const deleteCartItem = (
  state: CartState,
  productToDelete: CartItem
): CartState => {
  // completely delete an item from cart
  const cartItems = state.cartItems;
  let updatedCartItems = cartItems.filter(
    (product) => product.id !== productToDelete.id
  );

  const newTotalQuantity = state.totalQuantity - productToDelete.quantity;
  const newTotalPrice =
    state.totalPrice - productToDelete.quantity * productToDelete.price;

  return {
    ...state,
    cartItems: updatedCartItems,
    totalQuantity: newTotalQuantity,
    totalPrice: newTotalPrice,
  };
};

export const clearCart = (): CartState => {
  return CART_INITIAL_STATE;
};

// ACTION TYPES
export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type AddCartItem = ActionWithPayload<
  CART_ACTION_TYPES.ADD_ITEM_TO_CART,
  CartItem
>;

export type DecrementCartItem = ActionWithPayload<
  CART_ACTION_TYPES.DECREMENT_CART_ITEM,
  CartItem
>;

export type DeleteCartItem = ActionWithPayload<
  CART_ACTION_TYPES.DELETE_CART_ITEM,
  CartItem
>;

export type ResetCart = Action<CART_ACTION_TYPES.RESET_CART>;

// CART ACTIONS
export const addItemToCart = withMatcher(
  (productToAdd: CartItem): AddCartItem =>
    // add completely new product
    // or increase quantity to existing product
    createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART, productToAdd)
);

export const decrementItemQuantity = withMatcher(
  (productToDecrement: CartItem): DecrementCartItem =>
    // decrement item quantity from cart
    // if quantity === 1 => delete item from cart
    createAction(CART_ACTION_TYPES.DECREMENT_CART_ITEM, productToDecrement)
);

export const deleteItemFromCart = withMatcher(
  (productToDelete: CartItem): DeleteCartItem =>
    // completely delete item from cart
    createAction(CART_ACTION_TYPES.DELETE_CART_ITEM, productToDelete)
);

export const clearCartItems = withMatcher(
  (): ResetCart => createAction(CART_ACTION_TYPES.RESET_CART)
);

export const setIsCartOpen = withMatcher(
  (openStatus: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, openStatus)
);
