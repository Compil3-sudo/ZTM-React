import React, { useContext } from "react";
import "./cart-icon.styles";
import { CartContext } from "../../contexts/cart-context.component";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartTotalQuantity,
  selectIsCartOpen,
} from "../../store/cart/cart-selector";
import { setIsCartOpen } from "../../store/cart/cart-actions";

const CartIcon = () => {
  // const cartCtx = useContext(CartContext);
  const totalQuantity = useSelector(selectCartTotalQuantity);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
