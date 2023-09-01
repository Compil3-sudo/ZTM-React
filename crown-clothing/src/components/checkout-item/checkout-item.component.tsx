import React, { FC, memo } from "react";
import "./checkout-item.styles";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  decrementItemQuantity,
  deleteItemFromCart,
} from "../../store/cart/cart-actions";
import { CartItem as CartItemType } from "../../store/cart/cart.types";
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";

type CheckoutItemProps = {
  cartItem: CartItemType;
};

const CheckoutItem: FC<CheckoutItemProps> = memo(({ cartItem }) => {
  const dispatch = useDispatch();

  const decrementCartItemHandler = () => {
    dispatch(decrementItemQuantity(cartItem));
  };

  const incrementCartItemHandler = () => {
    dispatch(addItemToCart(cartItem));
  };

  const deleteCartItemHandler = () => {
    dispatch(deleteItemFromCart(cartItem));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </ImageContainer>
      <BaseSpan>{cartItem.name}</BaseSpan>
      <Quantity>
        <Arrow onClick={decrementCartItemHandler}>&#10094;</Arrow>
        <Value>{cartItem.quantity}</Value>
        <Arrow onClick={incrementCartItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>${cartItem.price * cartItem.quantity}</BaseSpan>
      <RemoveButton onClick={deleteCartItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
});

export default CheckoutItem;
