import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { fetchCategoriesAsync } from "../../store/categories/category-actions";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Shop;
