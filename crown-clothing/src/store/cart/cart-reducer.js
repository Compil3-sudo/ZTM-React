import { createSlice } from "@reduxjs/toolkit";
// import {
//   CART_ACTION_TYPES,
//   addCartItem,
//   decrementCartItem,
//   deleteCartItem,
// } from "./cart-actions";

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const addCartItem = (state, productToAdd) => {
  // find if cartItems contains productToAdd

  const existingProductIndex = state.cartItems.findIndex(
    (product) => product.id === productToAdd.id
  );

  // if found, increment quantity
  const existingProduct = state.cartItems[existingProductIndex];

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    // product not found => new product => add to cart
    const newProduct = { ...productToAdd, quantity: 1 };
    state.cartItems.push(newProduct);
  }

  // return new array with modified cartItems/ new cart item
  state.totalQuantity++;
  state.totalPrice = state.totalPrice + productToAdd.price;
};

export const decrementCartItem = (state, productToDecrement) => {
  // decrease item quantity, OR remove if quantity === 1

  const productIndex = state.cartItems.findIndex(
    (product) => product.id === productToDecrement.id
  );

  state.totalQuantity--;
  state.totalPrice = state.totalPrice - productToDecrement.price;

  // when product.quantity is 1 => 0 after decrement => remove item from cart
  if (productToDecrement.quantity === 1) {
    state.cartItems = state.cartItems.filter(
      (product) => product.id !== productToDecrement.id
    );
  } else {
    const updatedProduct = {
      ...productToDecrement,
      quantity: productToDecrement.quantity - 1,
    };

    state.cartItems[productIndex] = updatedProduct;
  }
};

export const deleteCartItem = (state, productToDelete) => {
  // completely delete an item from cart
  state.cartItems = state.cartItems.filter(
    (product) => product.id !== productToDelete.id
  );

  state.totalQuantity = state.totalQuantity - productToDelete.quantity;
  state.totalPrice =
    state.totalPrice - productToDelete.quantity * productToDelete.price;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    addItemToCart(state, action) {
      addCartItem(state, action.payload);
    },
    decrementItemQuantity(state, action) {
      decrementCartItem(state, action.payload);
    },
    deleteItemFromCart(state, action) {
      deleteCartItem(state, action.payload);
    },
    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },
  },
});

// export const cartReducer = (state = CART_INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     // returns new cart state
//     case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
//       return addCartItem(state, payload);

//     case CART_ACTION_TYPES.DECREMENT_CART_ITEM:
//       return decrementCartItem(state, payload);

//     case CART_ACTION_TYPES.DELETE_CART_ITEM:
//       return deleteCartItem(state, payload);

//     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         isCartOpen: payload,
//       };

//     default:
//       return state;
//   }
// };

export const {
  setIsCartOpen,
  addItemToCart,
  decrementItemQuantity,
  deleteItemFromCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
