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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
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

  const cartContextValues = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
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
