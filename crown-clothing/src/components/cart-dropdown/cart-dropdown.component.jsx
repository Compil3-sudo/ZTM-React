import React, { useContext } from "react";
import "./cart-dropdown.styles";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart-context.component";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropdownContaier,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    cartCtx.setIsCartOpen(!cartCtx.isCartOpen);
    navigate("/checkout");
  };

  return (
    <CartDropdownContaier>
      <CartItems>
        {cartCtx.cartItems.length ? (
          cartCtx.cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <span style={{ margin: "0.5rem 0 1rem 0" }}>
        TOTAL: ${cartCtx.totalPrice}
      </span>

      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContaier>
  );
};

export default CartDropdown;
