import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart-context.component";

const Checkout = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div>
      <h2>Product Description Quantity Price Remove</h2>
      {cartCtx.cartItems.map((product) => (
        <div>
          <img src={product.imageUrl} alt={product.name} />
          <span>{product.name}</span>
          <span>
            {"<"} {product.quantity} {">"}
          </span>
          <span>{product.price}</span>
          <span>X</span>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
