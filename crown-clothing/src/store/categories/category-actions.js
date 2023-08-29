import { CATEGORY_ACTION_TYPES } from "./category.types";

export const fetchCategoriesStart = () => {
  return { type: CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START };
};

export const fetchCategoriesSuccess = (categoriesArray) => {
  return {
    type: CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    payload: categoriesArray,
  };
};

export const fetchCategoriesFailed = (error) => {
  return {
    type: CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
    payload: error,
  };
};
