import React, { createContext, useReducer } from "react";

const addCartItem = (state, productToAdd) => {
  // find if cartItems contains productToAdd
  const cartItems = state.cartItems;

  const existingProductIndex = cartItems.findIndex(
    (product) => product.id === productToAdd.id
  );

  // if found, increment quantity
  let newCartItems;
  const existingProduct = cartItems[existingProductIndex];

  if (existingProduct) {
    // method from course:
    // why should I map through the entire array...just update 1 item
    // return cartItems.map((product) =>
    //   product.id === existingProduct.id
    //     ? { ...existingProduct, quantity: existingProduct.quantity + 1 }
    //     : product
    // );

    // my method:
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

const decrementCartItem = (state, productToDecrement) => {
  // decrease item quantity, OR remove if quantity === 1
  // this should only be called on existing cart items
  const cartItems = state.cartItems;

  const productIndex = cartItems.findIndex(
    (product) => product.id === productToDecrement.id
  );

  const existingProduct = cartItems[productIndex];

  if (!existingProduct) {
    console.log(
      "ERROR: This function should only be called on existing cart items!"
    );
    return;
  }

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

const deleteCartItem = (state, productToDelete) => {
  // completely delete an item from cart
  // should only be called on existing cart items
  const cartItems = state.cartItems;

  const productIndex = cartItems.findIndex(
    (product) => product.id === productToDelete.id
  );

  const existingProduct = cartItems[productIndex];

  if (!existingProduct) {
    console.log(
      "ERROR: This function should only be called on existing cart items!"
    );
    return;
  }

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: (productToAdd) => {},
  decrementItemQuantity: (productToDecrement) => {},
  deleteItemFromCart: (productToDelete) => {},
  totalQuantity: 0,
  totalPrice: 0,
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const CART_ACTION_TYPES = {
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  DECREMENT_CART_ITEM: "DECREMENT_CART_ITEM",
  DELETE_CART_ITEM: "DELETE_CART_ITEM",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const cartReducer = (state, action) => {
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
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const addItemToCart = (productToAdd) => {
    // add completely new product
    // or increase quantity to existing product
    dispatch({
      type: CART_ACTION_TYPES.ADD_ITEM_TO_CART,
      payload: productToAdd,
    });
  };

  const decrementItemQuantity = (productToDecrement) => {
    // decrement item quantity from cart
    // if quantity === 1 => delete item from cart
    dispatch({
      type: CART_ACTION_TYPES.DECREMENT_CART_ITEM,
      payload: productToDecrement,
    });
  };

  const deleteItemFromCart = (productToDelete) => {
    // completely delete item from cart
    dispatch({
      type: CART_ACTION_TYPES.DELETE_CART_ITEM,
      payload: productToDelete,
    });
  };

  const setIsCartOpen = (openStatus) => {
    dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: openStatus });
  };

  const cartContextValues = {
    isCartOpen: cartState.isCartOpen,
    setIsCartOpen,
    addItemToCart,
    decrementItemQuantity,
    deleteItemFromCart,
    cartItems: cartState.cartItems,
    totalQuantity: cartState.totalQuantity,
    totalPrice: cartState.totalPrice,
  };

  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  );
};
