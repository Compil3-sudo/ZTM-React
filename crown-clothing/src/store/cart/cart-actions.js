export const CART_ACTION_TYPES = {
  ADD_ITEM_TO_CART: "cart/ADD_ITEM_TO_CART",
  DECREMENT_CART_ITEM: "cart/DECREMENT_CART_ITEM",
  DELETE_CART_ITEM: "cart/DELETE_CART_ITEM",
  SET_IS_CART_OPEN: "cart/SET_IS_CART_OPEN",
};

export const addCartItem = (state, productToAdd) => {
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

export const decrementCartItem = (state, productToDecrement) => {
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

export const deleteCartItem = (state, productToDelete) => {
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

export const addItemToCart = (productToAdd) => {
  // add completely new product
  // or increase quantity to existing product
  return {
    type: CART_ACTION_TYPES.ADD_ITEM_TO_CART,
    payload: productToAdd,
  };
};

export const decrementItemQuantity = (productToDecrement) => {
  // decrement item quantity from cart
  // if quantity === 1 => delete item from cart
  return {
    type: CART_ACTION_TYPES.DECREMENT_CART_ITEM,
    payload: productToDecrement,
  };
};

export const deleteItemFromCart = (productToDelete) => {
  // completely delete item from cart
  return {
    type: CART_ACTION_TYPES.DELETE_CART_ITEM,
    payload: productToDelete,
  };
};

export const setIsCartOpen = (openStatus) => {
  return { type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: openStatus };
};
