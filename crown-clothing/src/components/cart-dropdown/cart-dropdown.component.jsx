import React, { useContext } from "react";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart-context.component";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    cartCtx.setIsCartOpen(!cartCtx.isCartOpen);
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartCtx.cartItems &&
          cartCtx.cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
      </div>
      <span style={{ margin: "0.5rem 0 1rem 0" }}>
        TOTAL: ${cartCtx.totalPrice}
      </span>

      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
