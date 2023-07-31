import React, { useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./product-card.styles.scss";
import { CartContext } from "../../contexts/cart-context.component";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart-actions";

const ProductCard = ({ product }) => {
  // const cartCtx = useContext(CartContext);
  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="product-card-container">
      <img src={product.imageUrl} alt={product.name} />

      <div className="footer">
        <span className="name">{product.name}</span>
        <span className="price">$ {product.price}</span>
      </div>

      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
