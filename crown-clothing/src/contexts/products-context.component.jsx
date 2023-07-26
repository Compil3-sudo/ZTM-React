import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import SHOP_DATA from "../shop-data.js";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase.utils.js";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const productsContextValues = { products, setProducts };

  // only do this once to init firebase database with shop data
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  // useEffect(() => {
  //   const getCategoriesMap = async () => {
  //     const categoryMap = await getCategoriesAndDocuments();
  //     console.log(categoryMap);
  //   };
  //   getCategoriesMap();
  // }, []);

  return (
    <ProductsContext.Provider value={productsContextValues}>
      {children}
    </ProductsContext.Provider>
  );
};
