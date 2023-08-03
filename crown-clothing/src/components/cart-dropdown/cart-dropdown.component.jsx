import React from "react";
import "./cart-dropdown.styles";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropdownContaier,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotalPrice,
  selectIsCartOpen,
} from "../../store/cart/cart-selector";
import { setIsCartOpen } from "../../store/cart/cart-reducer";

const CartDropdown = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    dispatch(setIsCartOpen(!isCartOpen));
    navigate("/checkout");
  };

  return (
    <CartDropdownContaier>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <span style={{ margin: "0.5rem 0 1rem 0" }}>TOTAL: ${totalPrice}</span>

      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContaier>
  );
};

export default CartDropdown;
