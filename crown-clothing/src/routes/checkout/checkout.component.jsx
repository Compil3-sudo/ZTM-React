import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart-context.component";

const Checkout = () => {
  const cartCtx = useContext(CartContext);

  const decrement = (product) => {
    // decrement product quantity
    cartCtx.decrementItemQuantity(product);
  };
  const increment = (product) => {
    cartCtx.addItemToCart(product);
  };

  return (
    <div>
      <h2>Product Description Quantity Price Remove</h2>
      {cartCtx.cartItems.map((product) => (
        <div key={product.id}>
          <img src={product.imageUrl} alt={product.name} />
          <span>{product.name}</span>
          <button onClick={() => decrement(product)}>decrement {"<"}</button>
          <span> {product.quantity} </span>
          <button onClick={() => increment(product)}>increment {">"}</button>
          <span>${product.price * product.quantity}</span>
          <button>X</button>
        </div>
      ))}
      <h2>TOTAL PRICE: ${cartCtx.totalPrice}</h2>
    </div>
  );
};

export default Checkout;
