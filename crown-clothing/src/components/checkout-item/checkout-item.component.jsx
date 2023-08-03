import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart-context.component";
import "./checkout-item.styles.scss";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  decrementItemQuantity,
  deleteItemFromCart,
} from "../../store/cart/cart-reducer";

const CheckoutItem = ({ cartItem }) => {
  // const cartCtx = useContext(CartContext);
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
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <span className="arrow" onClick={decrementCartItemHandler}>
          &#10094;
        </span>
        <span className="value">{cartItem.quantity}</span>
        <span className="arrow" onClick={incrementCartItemHandler}>
          &#10095;
        </span>
      </span>
      <span className="price">${cartItem.price * cartItem.quantity}</span>
      <div className="remove-button" onClick={deleteCartItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
