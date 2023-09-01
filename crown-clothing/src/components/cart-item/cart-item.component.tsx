import React, { FC, memo } from "react";
import "./cart-item.styles";
import { CartItem as CartItemType } from "../../store/cart/cart.types";
import { CartItemContainer, ItemDetails } from "./cart-item.styles";

type CartItemProps = {
  cartItem: CartItemType;
};

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
  return (
    <CartItemContainer>
      <img src={cartItem.imageUrl} alt={cartItem.name} />
      <ItemDetails>
        <span>{cartItem.name}</span>
        <span>
          {cartItem.quantity} x ${cartItem.price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
