import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/products-context.component";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const productsCtx = useContext(ProductsContext);

  return (
    <div className="products-container">
      {productsCtx.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
