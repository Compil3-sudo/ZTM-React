import React, { FC } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart-actions";
import { CartItem } from "../../store/cart/cart.types";
import { CategoryItem } from "../../store/categories/category.types";

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addItemToCart(product as CartItem));
  };

  return (
    <ProductCartContainer>
      <img src={product.imageUrl} alt={product.name} />

      <Footer>
        <Name>{product.name}</Name>
        <Price>$ {product.price}</Price>
      </Footer>

      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
