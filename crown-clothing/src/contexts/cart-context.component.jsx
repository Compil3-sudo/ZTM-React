import React, { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
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
  return newCartItems;
};

const decrementCartItem = (cartItems, productToDecrement) => {
  // decrease item quantity, OR remove if quantity === 1
  // this should only be called on existing cart items
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

  // when product.quantity is 1 => 0 after decrement => remove item from cart
  if (productToDecrement.quantity === 1) {
    let updatedCartItems = cartItems.filter(
      (product) => product.id !== productToDecrement.id
    );
    return updatedCartItems;
  }

  const updatedProduct = {
    ...productToDecrement,
    quantity: productToDecrement.quantity - 1,
  };

  let updatedCartItems = [...cartItems];
  updatedCartItems[productIndex] = updatedProduct;

  return updatedCartItems;
};

const deleteCartItem = (cartItems, productToDelete) => {
  // completely delete an item from cart
  // should only be called on existing cart items
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

  return updatedCartItems;
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

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // method from course - why would I use useEffect for this ?
  // I just update the quantity inside the addItemToCart function
  // useEffect(() => {
  //   // reduce arguments - callback function, stating value
  //   const newCartQuantity = cartItems.reduce(
  //     (total, cartItem) => total + cartItem.quantity,
  //     0
  //   );
  //   setTotalQuantity(newCartQuantity);
  // }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    // add completely new product
    // or increase quantity to existing product
    setCartItems(addCartItem(cartItems, productToAdd));
    setTotalQuantity((prevState) => prevState + 1);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + productToAdd.price);
  };

  const decrementItemQuantity = (productToDecrement) => {
    // decrement item quantity from cart
    // if quantity === 1 => delete item from cart
    setCartItems(decrementCartItem(cartItems, productToDecrement));
    setTotalQuantity((prevState) => prevState - 1);
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice - productToDecrement.price
    );
  };

  const deleteItemFromCart = (productToDelete) => {
    // completely delete item from cart
    setCartItems(deleteCartItem(cartItems, productToDelete));
    setTotalQuantity((prevState) => prevState - productToDelete.quantity);
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - productToDelete.quantity * productToDelete.price
    );
  };

  const cartContextValues = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    decrementItemQuantity,
    deleteItemFromCart,
    cartItems,
    totalQuantity,
    totalPrice,
  };

  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  );
};
