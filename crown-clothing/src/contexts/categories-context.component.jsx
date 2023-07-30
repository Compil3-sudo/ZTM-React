import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import SHOP_DATA from "../shop-data.js";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const categoriesContextValues = { categoriesMap, setCategoriesMap };

  // only do this once to init firebase database with shop data
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={categoriesContextValues}>
      {children}
    </CategoriesContext.Provider>
  );
};
