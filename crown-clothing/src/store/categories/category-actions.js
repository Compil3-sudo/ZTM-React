export const CATEGORY_ACTION_TYPES = {
  SET_CATEGORIES: "categories/SET_CATEGORIES",
};

export const setCategories = (categoriesArray) => {
  // create Action
  return {
    type: CATEGORY_ACTION_TYPES.SET_CATEGORIES,
    payload: categoriesArray,
  };
};
