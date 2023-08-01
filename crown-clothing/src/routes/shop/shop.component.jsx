import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import {
  fetchCategoriesAsync,
  fetchCategoriesStart,
} from "../../store/categories/category-actions";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Shop;
