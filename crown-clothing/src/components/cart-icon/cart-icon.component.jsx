import React, { useContext } from "react";
import "./cart-icon.styles";
import { CartContext } from "../../contexts/cart-context.component";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
  const cartCtx = useContext(CartContext);

  const toggleIsCartOpen = () => {
    cartCtx.setIsCartOpen(!cartCtx.isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCtx.totalQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
